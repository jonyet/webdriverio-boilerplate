var page = require('../amazonpage')

var Homepage = Object.create(page, {
    /**
     * define elements
     */
    searchBar: { get: function () { return browser.elements('#twotabsearchtextbox'); } },
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this);
    } }
});

module.exports = Homepage
