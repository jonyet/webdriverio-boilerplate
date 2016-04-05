var page = require('./page')

var Summary = Object.create(page, {
    /**
     * define elements
     */
    globalHeader: { get: function () { return browser.elements('#selectorGoesHere'); } },
    summaryView: { get: function () { return browser.elements('#selectorGoesHere'); } },
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, 'systems');
    } }
});

module.exports = Summary
