import Navigation from '../component_objects/Navigation.js'

describe('Search : Find some books', () => {

    it('reaches the homepage', () => {
      Navigation.open()
    })

    it('searches for "qa testing" and submits', () => {
      Navigation.searchBar.click()
      Navigation.searchBar.keys('qa testing')
      Navigation.submitSearch.click()
    })

    it('Shows a positive number of results', () => {
      const results = $('div.sg-col-inner').getText()
      const integers = results.split(" ").filter(function(int) {
        return int.match(/\d+/g)
      })
      const cleanInteger = integers[1].replace(/,/g, "")
      expect(parseInt(cleanInteger)).to.be.above(0)
    })

})
