function Page () {
}

Page.prototype.open = function (path) {
    browser.url('http://www.gaiam.com/')
}

module.exports = new Page()
