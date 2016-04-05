var page = require('./page')

var Summary = Object.create(page, {
    /**
     * define elements
     */
    globalHeader: { get: function () { return browser.elements('#selectorGoesHere'); } },
    reportsView: { get: function () { return browser.elements('#selectorGoesHere'); } },
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, 'reports');
    } }
});

module.exports = Summary
