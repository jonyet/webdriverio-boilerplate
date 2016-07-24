var page = require('../amazonpage')

var Homepage = Object.create(page, {
    /**
     * define elements
     */
    navbar: { get: function () { return browser.element('#navbar'); } },
    searchBar: { get: function () { return browser.element('#twotabsearchtextbox'); } },
    submitSearch: { get: function () { return browser.element('#nav-search > form > div.nav-right > div > input'); } },
    shoppingCart: { get: function () { return browser.element('#nav-cart > span.nav-cart-icon.nav-sprite'); } },
    gwColOne: { get: function () { return browser.element('#gw-col-1'); } },
    gwColTwo: { get: function () { return browser.element('#gw-col-2'); } },
    gwColThree: { get: function () { return browser.element('#gw-col-3'); } },
    gwColFour: { get: function () { return browser.element('#gw-col-4'); } },
    footColOne: { get: function () { return browser.element('#navFooter > table > tbody > tr > td:nth-child(1)'); } },
    footColTwo: { get: function () { return browser.element('#navFooter > table > tbody > tr > td:nth-child(3)'); } },
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this);
    } }
});

module.exports = Homepage
