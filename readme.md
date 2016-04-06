## gulp-webriver boilerplate
**UI Automation solution**

qa automation framework using gulp with webdriverio and mocha

**Get started**

install git & nodejs/npm

```
git clone https://github.com/jonyet/gulp-webdriverio-boilerplate.git
```

get your globals installed:

```
npm install -g selenium-standalone
selenium-standalone install
selenium-standalone start
npm install -g webdriverio
```
install your local dependencies

```
npm install
```

**Warning**

as it stands right now, you will need to manually build out the wdio-spec-reporter module for this to work:

```
cd node_modules/wdio-spec-reporter
npm install
```
now you should be all set!

```
gulp webdriver:demo
```
