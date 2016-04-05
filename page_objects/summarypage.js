var page = require('./page')

var Summary = Object.create(page, {
    /**
     * define elements
     */

    campaignProgressOK:  { get: function () { return browser.elements('#selectorGoesHere'); } },
    campaignProgressComplete:  { get: function () { return browser.elements('#selectorGoesHere'); } },
    campaignProgressError:  { get: function () { return browser.elements('#selectorGoesHere'); } },
    campaignProgressWarning:  { get: function () { return browser.elements('#selectorGoesHere'); } },
    campaignCompletionMax: { get: function () { return browser.elements('#selectorGoesHere'); } },
    campaignCompletionComplete: { get: function () { return browser.elements('#selectorGoesHere'); } },
    campaignStatusError: { get: function () { return browser.elements('#selectorGoesHere'); } },
    campaignStatusWarning: { get: function () { return browser.elements('#selectorGoesHere'); } },
    campaignStatusComplete: { get: function () { return browser.elements('#selectorGoesHere'); } },
    unresolvedIssues: { get: function () { return browser.elements('#selectorGoesHere'); } },
    globalHeader: { get: function () { return browser.elements('#selectorGoesHere'); } },
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, 'summary');
    } }
});

module.exports = Summary
