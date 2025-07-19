Deploy a React App to Arweave with ARx
Step 1: Install Node.js and npm
To create and run a React app, you’ll need Node.js and npm (Node Package Manager). These tools allow you to manage JavaScript libraries and dependencies, and to run JavaScript code outside the browser.

Download and install Node.js from the Node.js official website.
After installation, open a terminal and check that Node and npm were installed successfully by running:
node -v
npm -v
If these commands output version numbers, you’re ready to proceed.

Step 2: Create a React App
To create a new React app, run:

npx create-react-app <project-name>
This command generates a < project-name > directory containing your React project setup. More info on building with React can be found here.

Step 3: Update the package.json
In order to avoid issues with path references during deployment, add a "homepage" field in your package.json file to specify relative paths. Open package.json and add the following:

"homepage": "."
This change tells React to use relative paths for assets, which is essential for deploying to Arweave or similar environments.

Step 4: Build the App
To generate an optimized, production-ready version of your app, run:

cd <project-name>

npm run build
The build folder will contain everything needed for deployment.

Step 5: Deploy to Arweave
Make sure you have:

ARx CLI installed (npm install -g @permaweb/arx).
Arweave Wallet JSON file with funds for authentication and storage costs.
Full steps to upload with ARx can be found here.

To deploy a directory, use the following command:

arx upload-dir build -w ../wallet-path/wallet.json --index-file index.html -t arweave -h https://turbo.ardrive.io
Command Breakdown:

• upload-dir build: Specifies the folder to upload.

• -w ../wallet-path/wallet.json: Path to your Arweave wallet JSON file.

• --index-file index.html: Defines the entry file (usually index.html).

• -t arweave: Sets the token type.

• -h https://turbo.ardrive.io: Uses Turbo credits for the upload.

After successful deployment, the terminal will provide an Arweave link to your live app.