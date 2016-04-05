var page = require('./page')

var Summary = Object.create(page, {
    /**
     * define elements
     */
    refreshData:  { get: function () { return browser.elements('#selectorGoesHere'); } },
    search:  { get: function () { return browser.elements('#selectorGoesHere'); } },
    dateRange:  { get: function () { return browser.elements('#selectorGoesHere'); } },
    currentFilter:  { get: function () { return browser.elements('#selectorGoesHere'); } },
    globalHeader: { get: function () { return browser.elements('#selectorGoesHere'); } },
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, 'campaign');
    } }
});

module.exports = Summary
