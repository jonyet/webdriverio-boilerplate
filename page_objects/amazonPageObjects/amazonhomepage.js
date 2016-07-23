var page = require('../amazonpage')

var Homepage = Object.create(page, {
    /**
     * define elements
     */
    navbar: { get: function () { return browser.element('#navbar'); } },
    searchBar: { get: function () { return browser.element('#twotabsearchtextbox'); } },
    submitSearch: { get: function () { return browser.element('#nav-search > form > div.nav-right > div > input'); } },
    shoppingCart: { get: function () { return browser.element('#nav-cart > span.nav-cart-icon.nav-sprite'); } },
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this);
    } }
});

module.exports = Homepage
