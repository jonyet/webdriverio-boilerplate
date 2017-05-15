## webriverio-boilerplate

a simple front-end test automation framework using webdriverio and mocha, designed with high portability as a priority. the principal directive is to use this boilerplate to write front-end functional tests - a jenkins CI job would trigger the test runs, which would execute in a test service like browserstack, on whatever permutation of browsers and platforms desired.

**Prerequisites**
* Java Development Kit 1.8 or greater:  [http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html]
* ImageMagick (Assuming you have Homebrew installed):
```
brew install imagemagick
```

**Get started**

install git & nodejs/npm (i suggest via nvm [https://github.com/creationix/nvm/blob/master/README.markdown], using node 6.3.0 & npm 3.10.3)

install your local dependencies

```
npm install
```

last, use the `.envschema` file, create a `.env` file with the appropriate environmental settings (mobile/tablet viewports, authentication for browserstack/saucelabs, and sumologic collector info). only the viewport settings are required to run successfully, so the below will suffice initially.

```
cp .envschema .env
```

this framework is designed to be most effectively leveraged in CI settings, ___with a remote service such as Browserstack or Sauce Labs___ where Jenkins/Travis jobs simply run npm install and npm test upon completion of an upstream trigger. the `.env` file is where you will store your credentials for these services, such that they aren't committed. it will work locally but is not designed to scale from your laptop ;)

anyway, now you should be all set!

```
npm run testfun
```

see the scripts in `package.json` for more information on what scripts are available and what they're actually doing.

## Custom Modules

there is also some ancillary functionality baked into the system via two additional modules:

- Resembler.js
- logger.js

**Resembler.js**

Webdrivercss is a plugin that allows you to take screenshots of a single element
and store it as a baseline `.png` file. the next time the test runs, it will take a new screenshot
and assert that the changes made to it are within reason (default is 0.05% mismatch).

unfortunately, webdrivercss has been deprecated since wdio v2. this Resembler class i've added
is a workaround for said deprecated plugin. it uses similiar (if not the same) modules in
order to effectively accomplish the same visual regression task. it should be used with very tight control over the platform/browser in which the tests will be conducted (see `capabilities` in `wdio.visual.js`). _mozilla has recently broken full DOM screenshots for versions 48 and higher. use chrome or firefox v47._

Usage:

```
assertElementLayout(path, parentScreenshot, filename, selector, threshold);
```
| Param    | Type          | Details                                                                                |
|----------|---------------|----------------------------------------------------------------------------------------|
| path     | String        | path to screenshot landing.                                       |
| parentScreenshot     | String        | filename for full document screenshot.                                       |
| filename | String        | name for your screenshot.                                       |
| selector | String or Key | you can either pass a selector string straight in, or call it from your page object.   |
| threshold | Integer | determines the mismatch percentage threshold |

example provided in `specs_css/amazonvisualregression.js`

**logger.js**

Leverages the winston module to set log objects and loglevel. currently only utilized for debugging/refactoring the Resembler. sets a nice foundation for logging anything locally as well as to extraneous services like Splunk or Sumologic.
