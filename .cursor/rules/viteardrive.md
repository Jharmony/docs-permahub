React Starter Kit w/vite & ArDrive
This guide will walk you through in a step by step flow to configure your development environment to build and deploy a permaweb react application.

Prerequisites
Basic Typescript Knowledge (Not Mandatory) - [https://www.typescriptlang.org/docs/](Learn Typescript)
NodeJS v16.15.0 or greater - [https://nodejs.org/en/download/](Download NodeJS)
Knowledge of ReactJS - [https://reactjs.org/](Learn ReactJS)
Know git and common terminal commands
Development Dependencies
TypeScript
NPM or Yarn Package Manager
Steps
Create React App
NPM
YARN
npm create vite my-arweave-app --template react-ts
cd my-arweave-app
npm install
Copied!
Add React Router DOM
NPM
YARN
npm install react-router-dom
Copied!
We need to use the hash-router to create a working app on arweave.

Page Components
touch src/Home.tsx src/About.tsx
Copied!
src/Home.tsx

import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			Welcome to the Permaweb!
			<Link to={"/about/"}>
				<div>About</div>
			</Link>
		</div>
	);
}

export default Home;
Copied!
src/About.tsx

import { Link } from "react-router-dom";

function About() {
	return (
		<div>
			Welcome to the About page!
			<Link to={"/"}>
				<div>Home</div>
			</Link>
		</div>
	);
}

export default About;
Copied!
Modify App.tsx
We need to update the App.tsx to manage different pages

import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"/about/"} element={<About />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
Copied!
Modify index.css
Alter the body selector

body {
  margin: 0;
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  place-items: center;
  min-width: 100%;
  min-height: 100vh;
}
Copied!
Run the project

NPM
YARN
npm run dev
Copied!
Building React App
Modify vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [react()],
})
Copied!
Build App
yarn build
Copied!
Deploy Permanently
Generate Wallet
We need the arweave package to generate a wallet

NPM
YARN
npm install --save arweave
Copied!
then run this command in the terminal

node -e "require('arweave').init({}).wallets.generate().then(JSON.stringify).then(console.log.bind(console))" > wallet.json
Copied!
Fund Wallet
You will need to fund your wallet with ArDrive Turbo credits. To do this, enter ArDrive and import your wallet. Then, you can purchase turbo credits for your wallet.

Setup Permaweb-Deploy
NPM
YARN
npm install --global permaweb-deploy
Copied!
Update package.json
{
  ...
  "scripts": {
    ...
    "deploy": "DEPLOY_KEY=$(base64 -i wallet.json) permaweb-deploy --ant-process << ANT-PROCESS >> "
  }
  ...
}
Copied!
Replace << ANT-PROCESS >> with your ANT process id.

Run build
Now it is time to generate a build, run

NPM
YARN
npm run build
Copied!
Run deploy
Finally we are good to deploy our first Permaweb Application

NPM
YARN
npm run deploy
Copied!
ERROR

If you receive an error Insufficient funds, make sure you remembered to fund your deployment wallet with ArDrive Turbo credits.

Response
You should see a response similar to the following:

Deployed TxId [<<tx-id>>] to ANT [<<ant-process>>] using undername [<<undername>>]
Copied!
Your React app can be found at https://arweave.net/<< tx-id >>.

SUCCESS

You should now have a React Application on the Permaweb! Great Job!

Congrats!
You just published a react application on the Permaweb! This app will be hosted forever!