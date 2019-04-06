# webriverio-boilerplate

a front-end test automation framework using webdriverio and mocha, designed to be as simple as possible for beginners.

**Prerequisites**

node

**Get started**

install the latest stable version of node (suggest via nvm [https://github.com/creationix/nvm/blob/master/README.markdown])

clone the project

install your dependencies

```
npm install
```

copy the `.envschema` file to `.env` and fill in your remote service credentials (browserstack, saucelabs, etc).

```
cp .envschema .env
```

if you've gone ahead and input valid credentials, you can just to `npm test` to run all the tests there and see what happens. if you don't have credentials, check the `package.json` for your available scripts.

```
npm test
```

feel free to fork this repo and make it work for you, or just clone it and update the remote origin url in `.git/config` to point to an empty repo wherever you need it to be.