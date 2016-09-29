## gulp-webriver-boilerplate

a simple qa automation framework using gulp with webdriverio and mocha

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

last, use the `.envschema` file, create a `.env` file with the appropriate environmental settings (mobile/tablet viewports, authentication for browserstack/saucelabs, and sumologic collector info). only the viewport settings are required to run. contact jterry@hugeinc.com if you are in need of valid credentials for browserstack or sumologic.

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
order to effectively accomplish the same visual regression task. currently recommended to be used with firefox, as the chromedriver v2+ team refuses to acknowledge the need to fix a broken feature (full document screenshots).

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

Leveraging the winston module to set log objects and loglevel. currently only utilized for debugging/refactoring the Resembler. sets a nice foundation for logging anything locally as well as to Splunk.
