# Deployment Guide

This guide will help you set up automated deployment of this documentation site to Arweave using permaweb-deploy.

## Prerequisites

1. **Arweave Wallet**: You need an Arweave wallet with:
   - Turbo credits for uploading
   - Ownership or controller privileges over an ArNS name

2. **GitHub Repository**: This project should be in a GitHub repository

## Setup Steps

### 1. Install Dependencies

The project already includes `permaweb-deploy` as a dev dependency. Install it:

```bash
npm install
```

### 2. Prepare Your Wallet

1. **Convert your wallet to base64** (choose your OS):

   **Mac:**
   ```bash
   base64 -i wallet.json | pbcopy
   ```

   **Linux:**
   ```bash
   base64 wallet.json | xclip -selection clipboard
   ```

   **Windows (CMD):**
   ```bash
   base64 wallet.json | clip
   ```

2. **Create GitHub Secret**:
   - Go to your GitHub repository
   - Navigate to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `DEPLOY_KEY`
   - Value: Paste the base64 encoded wallet (from step 1)

### 3. Configure ArNS Name

Update the deploy script in `package.json`:

```json
"deploy": "npm run docs:build && permaweb-deploy --deploy-folder ./docs/.vitepress/dist --arns-name YOUR_ARNS_NAME"
```

Replace `YOUR_ARNS_NAME` with your actual ArNS name.

### 4. Test Deployment

Test the deployment locally:

```bash
npm run deploy
```

### 5. Automated Deployment

Once everything is set up, pushing to the `main` branch will automatically:
1. Build the documentation site
2. Upload it to Arweave using Turbo
3. Update your ArNS name to point to the new deployment

## Important Notes

- **Security**: Never commit your `wallet.json` file to the repository
- **ArNS Names**: The `--arns-name` flag must be the top-level name, not an undername
- **Testnet**: Add `--ario-process testnet` to deploy to testnet instead of mainnet
- **Undernames**: Use `--undername undername` flag if deploying to an undername

## Troubleshooting

- **Authentication Errors**: Ensure your wallet has controller/owner privileges over the ArNS name
- **Turbo Credits**: Make sure your wallet has sufficient Turbo credits
- **Build Errors**: Check that the build process completes successfully before deployment

## Resources

- [permaweb-deploy Documentation](https://github.com/forwardresearch/permaweb-deploy)
- [ArNS Documentation](https://docs.ar.io/arns/)
- [Turbo Documentation](https://docs.ardrive.io/docs/turbo/turbo-sdk/) 