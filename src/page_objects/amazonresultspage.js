import Page from './page';

class Results extends Page {

    get resultsCount()  { return browser.element('#s-result-count'); }

    open() {
        super.open();
    }

}

export default new Results();
