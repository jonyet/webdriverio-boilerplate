export default {
  baseURL: 'https://selenium-release.storage.googleapis.com',
  version: '3.0.1',
  drivers: {
    chrome: {
      version: '2.25',
      arch: process.arch,
      baseURL: 'https://chromedriver.storage.googleapis.com'
    },
    firefox: {
      version: '0.11.1',
      arch: process.arch,
      baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
    }
  }
};
