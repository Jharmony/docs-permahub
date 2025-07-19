import { test } from 'node:test';
import * as assert from 'assert';
import { aoslocal } from '@permaweb/loco';

const log = res => console.log(res.Error ?? res.Output.data);

const _load = _file => async aos => {
    log(await aos.src(_file))
    return aos
}

const _eval = payload => async aos => {
    log(await aos.eval(payload))
    return aos
}

const _send = payload => async aos => {
    log(await aos.send(payload))
    return aos
}

async function getEvalOutput(aos, input) {
    try {
        return JSON.parse((await aos.eval(`require('json').encode(${input})`)).Output.data)
    }
    catch (e) {
        console.error(e.message ?? 'Error getting output')
    }
    return aos;
}

function generateEvent(data) {
    const eventId = data.id.toString();
    const event = {
        'Action': data.action,
        'Token': 'TOKEN',
        'TransactionHash': eventId,
        'TokenAmount': data.amount ?? '1000',
        'User': data.user,
        'LogIndex': eventId,
        'BlockNumber': eventId,
        'BlockHash': eventId,
        'TransactionIndex': '0',
        'Timestamp': eventId
    };

    if (data.recipient) event.Recipient = data.recipient;
    return event;
}

test('bridge oracle', async () => {
    const initId = Date.now();

    await aoslocal()
        // Register O2
        .then(_eval(`O2 = 'O2'`))
        // Load the bridge oracle
        .then(_load('../src/bridge_oracle.lua'))

        

        // Override the block cycle - TESTING PURPOSES ONLY
        .then(_eval(`DISPATCH_BLOCKS_CYCLE = 0`))

        // Register Mint / Bridge / DepositDelay
        .then(_send({
            From: 'O2',
            Action: 'Register',
            Data: JSON.stringify({
                'Mint': 'MINT',
                'Bridge': 'BRIDGE',
                'Token': 'TOKEN',
                'DepositDelay': '10-sec'
            })
        }))

        // Send price and yield updates
        .then(_send({
            From: 'BRIDGE',
            Action: 'Oracle.Batch',
            Data: JSON.stringify([
                { 'Action': 'Price-Update', 'Token': 'TOKEN', 'Price': '1000', 'Currency': 'USD', 'Timestamp': Date.now().toString() },
                { 'Action': 'Yield-Update', 'Token': 'TOKEN', 'Yield': '10', 'Timestamp': Date.now().toString() },
            ])
        }))
        
        // Send an event batch
        .then(_send({
            From: 'BRIDGE',
            Action: 'Oracle.Batch',
            Data: JSON.stringify([
                generateEvent({ id: initId, action: 'Deposit', user: 'User-1', recipient: 'Recipient-1' }),
                generateEvent({ id: initId + 1, action: 'Deposit', user: 'User-1', recipient: 'Recipient-2' }),
                generateEvent({ id: initId + 2, action: 'Deposit', user: 'User-2', recipient: 'Recipient-3' }),
            ])
        }))

        // View the deposit queue
        .then(async aos => {
            const depositQueue = await getEvalOutput(aos, 'DepositQueue');

            // Each deposit request should be entered into the queue
            assert.equal(depositQueue.length, 3);
            return aos;
        })

        // Send a request to process the deposit queue
        .then(_send({ From: 'BRIDGE', Action: 'Oracle.Dispatch' }))

        // View deposits and deposit queue
        .then(async aos => {
            const deposits = await getEvalOutput(aos, 'Deposits');
            const depositQueue = await getEvalOutput(aos, 'DepositQueue');
            
            // Since these deposits are not old enough yet they should not have been processed
            assert.equal(deposits.store.data.length, 0);

            // Each deposit should still remain in the queue
            assert.equal(depositQueue.length, 3);
            return aos;
        })

        // Send a request to process the deposit queue
        .then(_send({ From: 'BRIDGE', Action: 'Oracle.Dispatch', Timestamp: Date.now() + 5000 }))

        // View deposits and deposit queue
        .then(async aos => {
            const deposits = await getEvalOutput(aos, 'Deposits');
            const depositQueue = await getEvalOutput(aos, 'DepositQueue');
            
            // These deposits should be processed
            assert.deepEqual(deposits.store.data, {
                'TOKEN|Recipient-1|User-1': {
                    Token: 'TOKEN',
                    Amount: '1000',
                    User: 'User-1',
                    Recipient: 'Recipient-1',
                    _key: 'TOKEN|Recipient-1|User-1'
                },
                'TOKEN|Recipient-2|User-1': {
                    Token: 'TOKEN',
                    Amount: '1000',
                    User: 'User-1',
                    Recipient: 'Recipient-2',
                    _key: 'TOKEN|Recipient-2|User-1'
                },
                'TOKEN|Recipient-3|User-2': {
                    Token: 'TOKEN',
                    Amount: '1000',
                    User: 'User-2',
                    Recipient: 'Recipient-3',
                    _key: 'TOKEN|Recipient-3|User-2'
                },
            });

            // Each deposit should be removed from the queue
            assert.equal(depositQueue.length, 0);
            return aos;
        })

        // Send a dispatch request
        .then(_send({ From: 'BRIDGE', Action: 'Oracle.Dispatch' }))

        // Send a new batch with a withdraw event
        .then(_send({
            From: 'BRIDGE',
            Action: 'Oracle.Batch',
            Data: JSON.stringify([
                generateEvent({ id: initId + 3, action: 'Withdraw', user: 'User-1', amount: '500' }),
            ])
        }))

        // View deposits
        .then(async aos => {
            const deposits = await getEvalOutput(aos, 'Deposits');

            const userEntries = Object.entries(deposits.store.data)
                .filter(([key, _value]) => key.includes('User-1'))
                .map(([key, value]) => ({ key, value }));

            const totalAmount = userEntries.reduce((total, entry) => {
                return total + parseInt(entry.value.Amount, 10);
            }, 0);

            // The total amount deposited for the first user should account for the withdraw
            assert.equal(totalAmount, 1500);
            return aos;
        })

        // Withdraw the rest of the deposited amount
        .then(_send({
            From: 'BRIDGE',
            Action: 'Oracle.Batch',
            Data: JSON.stringify([
                generateEvent({ id: initId + 4, action: 'Withdraw', user: 'User-1', amount: '1500' }),
            ])
        }))

        // View deposits
        .then(async aos => {
            const deposits = await getEvalOutput(aos, 'Deposits');

            const userEntries = Object.entries(deposits.store.data)
                .filter(([key, _value]) => key.includes('User-1'))
                .map(([key, value]) => ({ key, value }));

            const totalAmount = userEntries.reduce((total, entry) => {
                return total + parseInt(entry.value.Amount, 10);
            }, 0);

            // The total amount deposited for the first user should account for the withdraw and now be zero
            assert.equal(totalAmount, 0);
            return aos;
        })
});