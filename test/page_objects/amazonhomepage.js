import Page from './page';

class Home extends Page {

    get navbar()  { return browser.element('#navbar'); }
    get searchBar()  { return browser.element('#twotabsearchtextbox'); }
    get submitSearch()  { return browser.element('#nav-search > form > div.nav-right > div > input'); }
    get shoppingCart()  { return browser.element('#nav-cart > span.nav-cart-icon.nav-sprite'); }

    open() {
        super.open();
    }

    // submit() {
    //     this.form.submitForm();
    // }

}

export default new Home();
