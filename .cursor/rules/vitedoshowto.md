Vite Documentation Page
To make a documentation page with Vite, you can use VitePress, a static site generator built on top of Vite and Vue. Here's a step-by-step guide:

Create a new project: Start by creating a new project folder and navigating into it.
mkdir project-name
cd project-name
Initialize the project: Use your preferred package manager to initialize the project. For example, using NPM:
npm init -y
Install VitePress: Add VitePress and Vue as dev dependencies to your project:
npm install --dev vitepress vue
Create the docs folder: Create a docs folder and an index.md file inside it. You can do this manually or using the terminal:
mkdir docs && echo '# Hello VitePress' > docs/index.md
Add scripts to package.json: Add the following scripts to your package.json file to run the development server, build the site, and serve it:
"scripts": {
  "docs:dev": "vitepress dev docs",
  "docs:build": "vitepress build docs",
  "docs:serve": "vitepress serve docs"
}
Run the development server: Start the development server to see your documentation site:
npm run docs:dev
This will start a hot-reloading development server at http://localhost:5173, where you can view your documentation site.
Customize your docs: To customize your documentation site, create a .vitepress folder inside the docs directory. Inside this folder, create a config.js file to configure your site. For example, you can set the title and description of your site:
export default {
  title: 'Adocs',
  description: 'An awesome docs template built by me'
}
Customize the navbar: You can customize the navbar by adding navigation links to the themeConfig object in your config.js file. For example:
export default {
  themeConfig: {
    nav: [
      { text: "About", link: "/about" },
      { text: "Contact", link: "/contact" },
      { text: "Guide", link: "/guide" },
      { text: "Configs", link: "/configs" },
      { text: "Changelog", link: "https://github.com/..." }
    ]
  }
}
Add social icons: You can add social icons to your navigation menu by defining a socialLinks object in your config.js file. For example:
export default {
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/Evavic44/adocs" },
      { icon: "twitter", link: "https://twitter.com/victorekea" },
      { icon: "discord", link: "..." }
    ]
  }
}
Add a sidebar: VitePress also comes with built-in components like sidebar menus. To add a sidebar, create an object called sidebar in your config.js file. For example:
export default {
  sidebar: [
    { text: "Getting Started", link: "/getting-started" },
    { text: "API Reference", link: "/api-reference" }
  ]
}
By following these steps, you can create a documentation page with Vite using VitePress. VitePress simplifies the process of creating and maintaining documentation sites by leveraging Markdown and Vue components.