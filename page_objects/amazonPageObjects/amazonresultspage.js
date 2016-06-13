var page = require('../amazonpage')

var Resultspage = Object.create(page, {
    /**
     * define elements
     */
    resultsCount: { get: function () { return browser.elements('#s-result-count'); } },
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this);
    } }
});

module.exports = Resultspage
