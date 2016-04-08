var page = require('./page')

var Home = Object.create(page, {
    /**
     * define elements
     */
    homie: { get: function () { return browser.elements('body > main > div.content > div.slot.home-promos.html-slot-container > div > div > div.home-promo-col-left > a > div > div > span.home-promo-lrg-txt'); } },
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, 'thisWillBePathVarInPagejs');
    } }
});

module.exports = Home
