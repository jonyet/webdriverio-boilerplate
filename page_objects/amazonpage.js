function Page () {
}

Page.prototype.open = function (path) {
    browser.url('http://www.amazon.com/')
}

module.exports = new Page()
