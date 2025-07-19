# @permaweb/libs Documentation Site

This is a comprehensive documentation site for @permaweb/libs, built with Vite, React, and VitePress. The site includes both a React application and a VitePress documentation site that can be deployed to Arweave's permaweb.

## Project Structure

```
permaweb-libs-docs/
├── docs/                    # VitePress documentation
│   ├── .vitepress/         # VitePress configuration
│   ├── index.md            # Main documentation page
│   ├── getting-started.md  # Getting started guide
│   ├── zones.md            # Zones documentation
│   ├── profiles.md         # Profiles documentation
│   ├── atomic-assets.md    # Atomic assets documentation
│   ├── collections.md      # Collections documentation
│   ├── comments.md         # Comments documentation
│   ├── api-reference.md    # API reference
│   └── examples.md         # Usage examples
├── src/                    # React application
│   ├── App.tsx            # Main React app with HashRouter
│   ├── Home.tsx           # Home page component
│   ├── About.tsx          # About page component
│   └── index.css          # Styles
├── dist/                   # Built React app (after build)
├── docs/.vitepress/dist/   # Built VitePress docs (after docs:build)
├── wallet.json            # Arweave wallet for deployment
└── package.json           # Project dependencies and scripts
```

## Features

### React Application
- **HashRouter**: Uses HashRouter for Arweave compatibility
- **Responsive Design**: Modern, responsive UI
- **Navigation**: Links to documentation and about page
- **Arweave Ready**: Configured for permaweb deployment

### VitePress Documentation
- **Comprehensive Coverage**: Complete documentation for all @permaweb/libs features
- **Interactive Navigation**: Sidebar navigation and search
- **Code Examples**: Extensive code examples and usage patterns
- **API Reference**: Complete API documentation with TypeScript types
- **Real-world Examples**: Practical examples for different use cases

## Getting Started

### Prerequisites

- Node.js >= v18.0
- npm or yarn
- Arweave wallet (for deployment)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd permaweb-libs-docs
```

2. Install dependencies:
```bash
npm install
```

3. Generate an Arweave wallet (if you don't have one):
```bash
node -e "require('arweave').init({}).wallets.generate().then(JSON.stringify).then(console.log.bind(console))" > wallet.json
```

### Development

#### Run React App
```bash
npm run dev
```
Visit `http://localhost:5173` to see the React application.

#### Run VitePress Documentation
```bash
npm run docs:dev
```
Visit `http://localhost:5173` to see the VitePress documentation.

### Building

#### Build React App
```bash
npm run build
```
This creates the `dist/` directory with the built React application.

#### Build VitePress Documentation
```bash
npm run docs:build
```
This creates the `docs/.vitepress/dist/` directory with the built documentation.

### Preview Built Applications

#### Preview React App
```bash
npm run preview
```

#### Preview VitePress Documentation
```bash
npm run docs:serve
```

## Deployment to Arweave

### Prerequisites for Deployment

1. **Fund your wallet**: You need AR tokens in your wallet for deployment
2. **Get ANT Process ID**: You need an ANT process ID for deployment
3. **Install permaweb-deploy**: Already included in the project

### Deploy to Arweave

1. **Update the deploy script**: Replace `<< ANT-PROCESS >>` in `package.json` with your actual ANT process ID:
```json
"deploy": "DEPLOY_KEY=$(base64 -i wallet.json) permaweb-deploy --ant-process YOUR_ANT_PROCESS_ID"
```

2. **Build the application**:
```bash
npm run build
npm run docs:build
```

3. **Deploy to Arweave**:
```bash
npm run deploy
```

### Deployment Response

After successful deployment, you should see a response like:
```
Deployed TxId [<<tx-id>>] to ANT [<<ant-process>>] using undername [<<undername>>]
```

Your application will be available at: `https://arweave.net/<<tx-id>>`

## Documentation Structure

### Core Concepts
- **Zones**: Entity management on the permaweb
- **Profiles**: User and organization representation
- **Atomic Assets**: Unique digital items
- **Collections**: Asset organization
- **Comments**: Social features

### API Reference
- Complete method documentation
- TypeScript interfaces
- Parameter descriptions
- Return value specifications
- Error handling examples

### Examples
- **Profile Management**: Complete user profile system
- **Asset Gallery**: Digital art gallery implementation
- **Social Platform**: Social media features
- **NFT Marketplace**: NFT creation and management
- **Blog Platform**: Decentralized blog
- **Portfolio Site**: Developer portfolio

## Customization

### VitePress Configuration
Edit `docs/.vitepress/config.js` to customize:
- Site title and description
- Navigation menu
- Sidebar structure
- Theme colors
- Social links

### React App Customization
- Modify `src/App.tsx` to add new routes
- Update `src/Home.tsx` and `src/About.tsx` for content changes
- Customize `src/index.css` for styling

### Adding New Documentation
1. Create new `.md` files in the `docs/` directory
2. Update `docs/.vitepress/config.js` to include new pages in navigation
3. Build and deploy

## Troubleshooting

### Common Issues

1. **Build Errors**: Make sure all dependencies are installed
2. **Deployment Failures**: Check wallet funding and ANT process ID
3. **Navigation Issues**: Verify HashRouter configuration for Arweave compatibility

### Getting Help

- Check the [@permaweb/libs documentation](https://github.com/permaweb/libs)
- Join the [Discord community](https://discord.gg/permaweb)
- Report issues on [GitHub](https://github.com/permaweb/libs)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev` and `npm run docs:dev`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ for the Permaweb**

For more information about @permaweb/libs, visit the [GitHub repository](https://github.com/permaweb/libs). 