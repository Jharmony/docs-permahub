Tom Intro: We have learned the basics of ao resolve, we need to udnerstand how ao runs on hyperbeam
ao modle you create a process with a message then you schedule message on that process, and compute those message and then any messages as a result in an outbox are pushed to other processes. 

Understanding wallets in HyperBEAM 

Create a Wallet in HyperBEAM shell
1> Wallet = ar_wallet:new().
         map    key            binary 
2> Msg = #{ <<"hello">> => <<"world">>}.
map   key            binary 
#{<<"hello">> => <<"world">>} //message that is not signed

To sign a message give it the message and the wallet
3> hb_message:commit(Msg, Wallet).
#{<<"commitments">> =>
      #{<<"UZJY79-DfmqZj7NY1xwzWbgE7ahWOBcDUwkE5kTPbEo">> =>
            #{<<"alg">> => <<"hmac-sha256">>,
              <<"commitment-device">> => <<"httpsig@1.0">>,
              <<"signature">> =>
                  <<"http-sig-95ceb802f7134d3f=:S8qwjpsaBm8fz1pvUTRwqecPS5knY+H/T1iv5pnkK/s7dgz+tjquuotnEq++yG16mWFjqQIq14kRz"...>>,
              <<"signature-input">> =>
                  <<"http-sig-95ceb802f7134d3f=(\"hello\");alg=\"rsa-pss-sha512\";keyid=\"unxehAa4dXJ9wkAyvdh2rKcmZ-_g43P1cgBt3LLp"...>>},
        <<"soMdYAr912S-cvS26mUL3q8M9ogj5KV0jzyvbEQi-S0">> =>
            #{<<"alg">> => <<"rsa-pss-sha512">>,
              <<"commitment-device">> => <<"httpsig@1.0">>,
              <<"committer">> =>
                  <<"JJXOuAL3E00_uqan-AAYnkUdYivuFfn87SD3vh8O1l0">>,
              <<"signature">> =>
                  <<"http-sig-95ceb802f7134d3f=:S8qwjpsaBm8fz1pvUTRwqecPS5knY+H/T1iv5pnkK/s7dgz+tjquuotnEq++yG16mWFjqQIq14kRz"...>>,
              <<"signature-input">> =>
                  <<"http-sig-95ceb802f7134d3f=(\"hello\");alg=\"rsa-pss-sha512\";keyid=\"unxehAa4dXJ9wkAyvdh2rKcmZ-_g43P1cgBt3LLp"...>>}},
  <<"hello">> => <<"wordl">>}
  18> SignedMessage = hb_message:commit(Msg2, Wallet).
#{<<"commitments">> =>
      #{<<"5cCHovZ7CBVsLqEgsV_GC753V3okiK9N9U9-v0YeRd8">> =>
            #{<<"alg">> => <<"rsa-pss-sha512">>,
              <<"commitment-device">> => <<"httpsig@1.0">>,
              <<"committer">> =>
                  <<"JJXOuAL3E00_uqan-AAYnkUdYivuFfn87SD3vh8O1l0">>,
              <<"signature">> =>
                  <<"http-sig-95ceb802f7134d3f=:SSOtiIcAcGMpmjiP1zL3Tm/hGK89eROcroUzo2gOLZGZBL4GVeBfAzPZEhqTDVpnYFxOY2CLOo6C3"...>>,
              <<"signature-input">> =>
                  <<"http-sig-95ceb802f7134d3f=(\"hello\");alg=\"rsa-pss-sha512\";keyid=\"unxehAa4dXJ9wkAyvdh2rKcmZ-_g43P1cgBt3LLp"...>>},
        <<"UZJY79-DfmqZj7NY1xwzWbgE7ahWOBcDUwkE5kTPbEo">> =>
            #{<<"alg">> => <<"hmac-sha256">>,
              <<"commitment-device">> => <<"httpsig@1.0">>,
              <<"signature">> =>
                  <<"http-sig-95ceb802f7134d3f=:SSOtiIcAcGMpmjiP1zL3Tm/hGK89eROcroUzo2gOLZGZBL4GVeBfAzPZEhqTDVpnYFxOY2CLOo6C3"...>>,
              <<"signature-input">> =>
                  <<"http-sig-95ceb802f7134d3f=(\"hello\");alg=\"rsa-pss-sha512\";keyid=\"unxehAa4dXJ9wkAyvdh2rKcmZ-_g43P1cgBt3LLp"...>>}},
  <<"hello">> => <<"wordl">>}

  19> hb_util:human_id(ar_wallet:to_address(Wallet)).
<<"JJXOuAL3E00_uqan-AAYnkUdYivuFfn87SD3vh8O1l0">>
20> hb_message:verify(SignedMsg).
* 1:19: variable 'SignedMsg' is unbound, did you mean 'SignedMessage'?
21> hb_message:verify(SignedMessage).
true
22> hb_message:verify(Msg).
* 1:19: variable 'Msg' is unbound, did you mean 'Msg2'?
23> hb_message:verify(Msg2).
true

Create a lua process and schedule/compute messages on HyperBEAM
24> Module = <<
    """
    function compute(base, req)
       base.results = req.body.body
       return base
    end
    """
    >>.
<<"function compute(base, req)\n   base.results = req.body.body\n   return base\nend">>
25> Wallet2 = ar_wallet:new().
{{{rsa,65537},
  <<26,106,250,114,227,93,215,65,39,7,182,18,187,194,189,
    128,27,140,195,21,214,172,80,140,67,143,...>>,
  <<177,191,87,189,47,174,125,79,255,46,130,61,52,218,57,
    249,96,213,41,242,225,1,31,111,115,...>>},
 {{rsa,65537},
  <<177,191,87,189,47,174,125,79,255,46,130,61,52,218,57,
    249,96,213,41,242,225,1,31,111,115,...>>}}
26> Address = hb_util:human_id(ar_wallet:to_address(Wallet2)).
<<"56ShrkqVQXPx8xVMkKmlxn0Ob3IQy1iFcOJv1pzrPp8">>
27> Operator = hb_util:human_id(ar_wallet:to_address(hb_wallet())).
** exception error: undefined shell command hb_wallet/0
28> Operator = hb_util:human_id(ar_wallet:to_address(hb:wallet())).
<<"vkxz2XeMYK2JTWanwqrIOKG9O315xcUQtYu85UK3ARo">>
29> Process = hb_message:commit(
    #{
      <<"device">> => <<"process@1.0">>,
      <<"type">> => <<"Process">>,
      <<"scheduler-device">> => <<"scheduler@1.0">>,
      <<"execution-device">> => <<"lua@5.3.a">>,
      <<"module">> => #{
       <<"content-type">> => <<"application/lua">>,
       <<"body">> => Module
    },
    <<"authority">> => Address,
    <<"scheduler-location">> => Operator
    }, Wallet2).
#{<<"authority">> =>
      <<"56ShrkqVQXPx8xVMkKmlxn0Ob3IQy1iFcOJv1pzrPp8">>,
  <<"commitments">> =>
      #{<<"6KmmpNv842GajfkksnUEt4vWJFqd7BjM7H10IVGYUeU">> =>
            #{<<"alg">> => <<"hmac-sha256">>,
              <<"commitment-device">> => <<"httpsig@1.0">>,
              <<"signature">> =>
                  <<"http-sig-a4a1ae4a954173f1=:gxzpCx3/2AAQltzAUa0Tn9cBqG/NioWOCbDQimaQM+D/gPnCGFMXQDv5YEPASibysxOvSlDUzG61v"...>>,
              <<"signature-input">> =>
                  <<"http-sig-a4a1ae4a954173f1=(\"@authority\" \"content-digest\" \"content-type\" \"device\" \"execution-device\" \"sch"...>>},
        <<"iySm7T548vsCkmdQwiB2OHuJFaZh54FYDbTgq_a_FXk">> =>
            #{<<"alg">> => <<"rsa-pss-sha512">>,
              <<"commitment-device">> => <<"httpsig@1.0">>,
              <<"committer">> =>
                  <<"56ShrkqVQXPx8xVMkKmlxn0Ob3IQy1iFcOJv1pzrPp8">>,
              <<"signature">> =>
                  <<"http-sig-a4a1ae4a954173f1=:gxzpCx3/2AAQltzAUa0Tn9cBqG/NioWOCbDQimaQM+D/gPnCGFMXQDv5YEPASibysxOvSlDUzG61v"...>>,
              <<"signature-input">> =>
                  <<"http-sig-a4a1ae4a954173f1=(\"@authority\" \"content-digest\" \"content-type\" \"device\" \"execution-device\" \"sch"...>>}},
  <<"device">> => <<"process@1.0">>,
  <<"execution-device">> => <<"lua@5.3.a">>,
  <<"module">> =>
      #{<<"body">> =>
            <<"function compute(base, req)\n   base.results = req.body.body\n   return base\nend">>,
        <<"content-type">> => <<"application/lua">>},
  <<"scheduler-device">> => <<"sheduler@1.0">>,
  <<"scheduler-location">> =>
      <<"vkxz2XeMYK2JTWanwqrIOKG9O315xcUQtYu85UK3ARo">>,
  <<"type">> => <<"Process">>}
