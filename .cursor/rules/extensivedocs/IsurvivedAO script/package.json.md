{
  "name": "node",
  "version": "1.0.0",
  "description": "",
  "main": "./lib/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc",
    "start": "ts-node src/index.ts",
    "test-module": "ts-node src/test-module.ts",
    "lint": "tslint -c tslint.json src/**/*.ts",
    "prepublish": "npm run build"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@permaweb/aoconnect": "^0.0.56",
    "@types/node": "^20.14.6",
    "csv-writer": "^1.6.0",
    "graphql": "^16.11.0",
    "graphql-request": "^6.1.0",
    "ts-node": "^10.9.2",
    "tslint": "^6.1.3",
    "typescript": "^5.5.2"
  },
  "files": [
    "./bin/*",
    "./lib/*"
  ],
  "typings": "./lib/index.d.ts"
}
