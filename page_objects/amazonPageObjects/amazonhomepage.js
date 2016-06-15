var page = require('../amazonpage')

var Homepage = Object.create(page, {
    /**
     * define elements
     */
    searchBar: { get: function () { return browser.element('#twotabsearchtextbox'); } },
    submitSearch: { get: function () { return browser.element('#nav-search > form > div.nav-right > div > input'); } },    
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this);
    } }
});

module.exports = Homepage
