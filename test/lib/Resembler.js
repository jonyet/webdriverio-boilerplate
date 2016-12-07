'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Resembler;

var fs = require('fs');
var expect = require('chai').expect;
var resemble = require('node-resemble-js');
var easyimg = require('easyimage');


var self;
function Resembler() {
  self = this;
}

Resembler.prototype.assertElementLayout = function (root, parent, fileName, element, threshold) {
  if ((typeof element === 'undefined' ? 'undefined' : _typeof(element)) === 'object') element = element.selector;
  var baselineSuffix = "";
  var diffSuffix = ".diff";
  var failureSuffix = ".fail";
  var filePath = root + fileName + '.png';

  fs.exists(filePath, function (exists) {
    ;
    exists ? filePath = root + fileName + diffSuffix + '.png' : filePath = filePath;
  });

  var size = browser.getElementSize(element);
  var location = browser.getLocation(element);
  var screenObj = browser.saveScreenshot();
  var baseline = root + fileName;

  return readParentScreenshot().then(cropAndCompare);

  function readParentScreenshot() {
    return new Promise(function (resolve, reject) {
      fs.readFile(parent, 'base64', function (err) {
        if (err) {
          _logger2.default.info(err);
          reject();
        } else {
          resolve();
        };
      });
    });
  };

  function cropAndCompare() {
    return cropInFile(size, location, parent).then(function (image) {
      return new Promise(function (resolve, reject) {
        _logger2.default.debug(location);
        _logger2.default.debug(parent + ' height was cropped to: ' + image.height.toString());
        _logger2.default.debug(parent + ' width was cropped to: ' + image.width.toString());
        if (image.path === baseline + '.png') {
          _logger2.default.info('>> new baseline generated:', image.path);
          _logger2.default.debug(image.path);
          _logger2.default.debug(baseline + '.png');
          resolve(true);
        } else {
          _logger2.default.info('>> not a new baseline - moving forward with comparison');
          _logger2.default.debug(image.path);
          _logger2.default.debug(baseline + '.png');
          resemble(fs.readFileSync(baseline + '.png')).compareTo(fs.readFileSync(image.path)).ignoreColors().onComplete(function (data) {
            _logger2.default.info('>> comparison complete');
            if (Number(data.misMatchPercentage) <= threshold) {
              if (Number(data.misMatchPercentage) >= 0.2) _logger2.default.warn(data.misMatchPercentage + '% mismatch detected:', filePath);
              _logger2.default.info('>> mismatch nominal:', data.misMatchPercentage);
              _logger2.default.info('>> expectation asserted');
              resolve(expect(data.misMatchPercentage).to.be.below(threshold));
            } else {
              _logger2.default.error(data.misMatchPercentage + '% mismatch detected: ' + (root + fileName + '.failure.png'));
              _logger2.default.debug('>> generating failure image: ' + (root + fileName + '.failure.png'));
              var stream = data.getDiffImage().pack().pipe(fs.createWriteStream(root + fileName + '.failure.png'));
              stream.on('finish', function () {
                _logger2.default.debug('>> stream finished');
                _logger2.default.debug('>> resolving promise with stream');
                resolve(expect(data.misMatchPercentage).to.be.below(threshold));
              });
            };
          });
        };
      });
    });
  };

  function cropInFile(size, location, srcFile) {
    _logger2.default.debug(srcFile + ' height must crop to: ' + size.height.toString());
    _logger2.default.debug(srcFile + ' width must crop to: ' + size.width.toString());
    return easyimg.crop({
      src: srcFile,
      dst: filePath,
      cropwidth: size.width,
      cropheight: size.height,
      x: location.x,
      y: location.y,
      gravity: 'North-West'
    }).then(function (image) {
      return image;
    }, function (err) {
      _logger2.default.info(err);
    });
  };
};