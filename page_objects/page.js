function Page () {
}

Page.prototype.open = function (path) {
    browser.url('http://awebsite.com/dashboard/' + path)
}

module.exports = new Page()
