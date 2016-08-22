module.exports = Resembler;

var fs = require('fs');
var expect = require('chai').expect;
var resemble = require('node-resemble-js');
var easyimg = require('easyimage');
var logger = require('./logger');

var self;
function Resembler(){
  self = this;
}

Resembler.prototype.assertElementLayout = function(root, parent, fileName, element){
  if (typeof element === 'object')
    element = element.selector;
  var baselineSuffix = "";
  var diffSuffix = ".diff";
  var failureSuffix = ".fail";
  var filePath = root + fileName + '.png';

  fs.exists(filePath, function(exists){;
    exists ? filePath = (root + fileName + diffSuffix + '.png') : filePath = filePath;
  });

  var size = browser.getElementSize(element);
  var location = browser.getLocation(element);
  var screenObj = browser.saveScreenshot();
  var baseline = root + fileName;

  return readParentScreenshot().then(cropAndCompare)

  function readParentScreenshot() {
    return new Promise(function(resolve, reject){
      fs.readFile(parent, 'base64', function(err) {
          if (err) {
            logger.info(err);
            reject();
          } else {
            resolve();
          };
      });
    });
  };

  function cropAndCompare() {
    return cropInFile(size, location, parent).then(function(image){
      return new Promise(function(resolve, reject){
        logger.debug(location);
        logger.debug(parent + ' height was cropped to: ' + image.height.toString());
        logger.debug(parent + ' width was cropped to: ' + image.width.toString());
        if (image.path === (baseline + '.png')){
          logger.info('>> new baseline generated:', image.path);
          logger.debug(image.path);
          logger.debug(baseline + '.png');
          resolve(true);
        } else {
          logger.info('>> not a new baseline - moving forward with comparison');
          logger.debug(image.path);
          logger.debug(baseline + '.png');
          resemble(fs.readFileSync(baseline + '.png'))
            .compareTo(fs.readFileSync(image.path))
            .ignoreColors()
            .onComplete(function(data){
              logger.info('>> comparison complete');
              if (Number(data.misMatchPercentage) <= 2) {
                logger.info('>> mismatch nominal:', data.misMatchPercentage);
                expect(data.misMatchPercentage).to.be.below(2); //race condition!!! this is fucking your metrics!!!
                logger.info('>> expectation asserted');
                resolve(data);                                  //race condition!!! this is fucking your metrics!!!
              } else {
                logger.info('>> mismatch out of scope:', data.misMatchPercentage);
                logger.info('>> generating failure image: ' + (root + fileName + '.failure.png'));
                var stream = data.getDiffImage().pack().pipe(fs.createWriteStream(root + fileName + '.failure.png'));
                stream.on('finish', function(){
                  logger.debug('>> stream finished');
                  expect(data.misMatchPercentage).to.be.below(2);   //race condition!!! this is fucking your metrics!!!
                  logger.debug('>> resolving promise with stream');
                  resolve(data);                                    //race condition!!! this is fucking your metrics!!!
                });
              };
            });
        };
      });
    });
  };

  function cropInFile(size, location, srcFile) {
    logger.debug(srcFile + ' height must crop to: ' + size.height.toString());
    logger.debug(srcFile + ' width must crop to: ' + size.width.toString());
    return easyimg.crop({
      src: srcFile,
      dst: filePath,
      cropwidth: size.width,
      cropheight: size.height,
      x: location.x,
      y: location.y,
      gravity: 'North-West'
    }).then(
      function(image){
        return image;
      },
      function(err){
        logger.info(err);
      }
    );
  };
};
