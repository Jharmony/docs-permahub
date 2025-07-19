# DOC HUB - Arweave & AO Ecosystem Documentation

This is a comprehensive documentation site for the Arweave and AO (Arweave's Actor Oriented) ecosystem, built with React, TypeScript, and Vite. The site provides guides, tutorials, and resources for developers building on Arweave and AO.

## Project Structure

```
docs-permahub/
├── src/                    # React application source
│   ├── components/         # React components
│   │   ├── Navigation.tsx  # Main navigation
│   │   ├── Sidebar.tsx     # Left sidebar
│   │   └── RightSidebar.tsx # Right sidebar
│   ├── pages/              # Documentation pages
│   │   ├── GettingStarted.tsx
│   │   ├── AtomicAssets.tsx
│   │   ├── Collections.tsx
│   │   ├── Profiles.tsx
│   │   ├── Zones.tsx
│   │   ├── Comments.tsx
│   │   ├── Bazar.tsx
│   │   ├── BuildingAIAgents.tsx
│   │   └── ...             # Additional pages
│   ├── assets/             # Images and static assets
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx            # Main React app with HashRouter
│   ├── Home.tsx           # Home page component
│   └── index.css          # Styles
├── dist/                   # Built React app (after build)
├── .github/workflows/      # GitHub Actions deployment
└── package.json           # Project dependencies and scripts
```

## Features

### React Application
- **HashRouter**: Uses HashRouter for Arweave compatibility
- **Responsive Design**: Modern, responsive UI with Tailwind CSS
- **Navigation**: Comprehensive navigation with left sidebar and right sidebar
- **Arweave Ready**: Configured for permaweb deployment
- **TypeScript**: Full TypeScript support for type safety

### Documentation Coverage
- **Getting Started**: Complete onboarding for new developers
- **Atomic Assets**: Digital asset creation and management
- **Collections**: Asset organization and curation
- **Profiles**: User identity and social features
- **Zones**: Content organization and communities
- **Comments**: Social interactions and discussions
- **Bazar & Bazar Studio**: Marketplace and creator tools
- **AI Agents**: Building AI agents on AO
- **Hackathon Resources**: Resources for hackathon participants
- **API Reference**: Complete API documentation
- **Examples**: Real-world implementation examples

## Getting Started

### Prerequisites

- Node.js >= v18.0
- npm or yarn
- Arweave wallet (for deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Jharmony/docs-permahub.git
cd docs-permahub
```

2. Install dependencies:
```bash
npm install
```

### Development

#### Run React App
```bash
npm run dev
```
Visit `http://localhost:5173` to see the React application.

### Building

#### Build React App
```bash
npm run build
```
This creates the `dist/` directory with the built React application.

### Preview Built Applications

#### Preview React App
```bash
npm run preview
```

## Deployment to Arweave

This project is configured for automated deployment to Arweave using GitHub Actions. When you push changes to the `main` branch, the site is automatically deployed to `https://docs.permahub.ar`.

### Manual Deployment

If you need to deploy manually:

```bash
npm run deploy
```

This will build the application and deploy it to Arweave using the configured ArNS name and undername.

## Documentation Structure

### Core Concepts
- **Getting Started**: Complete onboarding for new developers
- **Atomic Assets**: Digital asset creation and management
- **Collections**: Asset organization and curation
- **Profiles**: User identity and social features
- **Zones**: Content organization and communities
- **Comments**: Social interactions and discussions

### Advanced Topics
- **Bazar & Bazar Studio**: Marketplace and creator tools
- **AI Agents**: Building AI agents on AO
- **Hackathon Resources**: Resources for hackathon participants
- **API Reference**: Complete API documentation
- **Examples**: Real-world implementation examples

### Additional Resources
- **Starter Kits**: Quick start templates
- **Best Practices**: Development guidelines
- **Troubleshooting**: Common issues and solutions
- **Weavers Resource Library**: Complete toolkit

## Customization

### React App Customization
- Modify `src/App.tsx` to add new routes
- Update `src/pages/` components for content changes
- Customize `src/index.css` for styling
- Add new pages in `src/pages/` directory

### Adding New Documentation
1. Create new `.tsx` files in the `src/pages/` directory
2. Update `src/App.tsx` to include new routes
3. Update navigation components as needed
4. Build and deploy

## Troubleshooting

### Common Issues

1. **Build Errors**: Make sure all dependencies are installed
2. **Deployment Failures**: Check GitHub Actions logs for deployment issues
3. **Navigation Issues**: Verify HashRouter configuration for Arweave compatibility

### Getting Help

- Check the [Arweave documentation](https://docs.arweave.org/)
- Join the [Arweave Discord community](https://discord.gg/arweave)
- Report issues on [GitHub](https://github.com/Jharmony/docs-permahub)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ for the Arweave & AO Ecosystem**

For more information about Arweave, visit the [official documentation](https://docs.arweave.org/). 