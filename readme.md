## gulp-webriver-boilerplate

a simple qa automation framework using gulp with webdriverio and mocha

**Get started**

install git & nodejs/npm (i suggest via nvm [https://github.com/creationix/nvm/blob/master/README.markdown], using node 4.4.1 & npm 2.14.20)

install your local dependencies

```
npm install
```

and you should be all set!

```
node_modules/.bin/gulp amazon:demo
```

## Custom Modules

- Resembler.js
- logger.js

**Resembler.js**

Webdrivercss is a plugin that allows you to take screenshots of a single element
and store it as a baseline `.png` file. the next time the test runs, it will take a new screenshot
and assert that the changes made to it are within reason (default is 0.05% mismatch).

unfortunately, webdrivercss has been deprecated since wdio v2. this Resembler class i've added
is a workaround for said deprecated plugin. it uses similiar (if not the same) modules in
order to effectively accomplish the same visual regression task. currently recommended to be used with firefox, as chromedriver v2+ refuses to acknowledge the need to fix that broken feature.

**known issues**
- race condition causes inaccurate reporting
- currently seems to run most successfully with `maxInstances` set to 2
- runs too sync - needs refactoring

Usage:

```
assertElementLayout(path, parentScreenshot, filename, selector);
```
| Param    | Type          | Details                                                                                |
|----------|---------------|----------------------------------------------------------------------------------------|
| path     | String        | path to screenshot landing.                                       |
| parentScreenshot     | String        | filename for full document screenshot.                                       |
| filename | String        | name for your screenshot.                                       |
| selector | String or Key | you can either pass a selector string straight in, or call it from your page object.   |

example provided in `specs_css/amazonvisualregression.js`

**logger.js**

Leveraging the winston module to set log objects and loglevel. currently only utilized for debugging/refactoring the Resembler. sets a nice foundation for logging anything locally as well as to Splunk.
