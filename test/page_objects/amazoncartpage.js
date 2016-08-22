var page = require('./page')

var Homepage = Object.create(page, {
    /**
     * define elements
     */
    cartSize: { get: function () { return browser.element('#sc-active-cart > div > h1'); } },
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this);
    } }
});

module.exports = Homepage
