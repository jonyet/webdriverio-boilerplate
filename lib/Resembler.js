module.exports = Resembler;

var fs = require('fs');
var expect = require('chai').expect;
var resemble = require('node-resemble-js');
var easyimg = require('easyimage');

var self;
function Resembler(){
  self = this;
}

Resembler.prototype.assertElementLayout = function(fileName, element, fourK){
  if (typeof element === 'object')
    element = element.selector;
  var baselineSuffix = "";
  var diffSuffix = ".diff";
  var failureSuffix = ".fail";
  var root = './screenshots/';
  var filePath = root + fileName + '.png';

  fs.exists(filePath, function(exists){;
    exists ? filePath = (root + fileName + diffSuffix + '.png') : filePath = filePath;
  })

  var size = browser.getElementSize(element);
  (fourK === true) ? (size = { width: (size.width) * 2, height: (size.height) * 2 }) : size = size
  var location = browser.getLocation(element);
  var screenObj = browser.saveScreenshot();
  var baseline = root + fileName;

  return writeScreenshot().then(cropAndCompare)

  function writeScreenshot() {
    return new Promise(function(resolve, reject){
      fs.writeFile(filePath, screenObj, 'base64', function(err) {
          if (err) {
            console.log(err);
            reject();
          } else {
            resolve();
          };
      });
    });
  };

  function cropAndCompare() {
    return cropInFile(size, location, filePath).then(function(image){
      return new Promise(function(resolve, reject){
        if (image.path === (baseline + '.png')){
          console.log('>> new baseline generated:', image.path);
          console.log('>> execute test again to compare');
          resolve();
        } else {
          resemble(fs.readFileSync(baseline + '.png'))
            .compareTo(fs.readFileSync(image.path))
            .ignoreColors()
            .onComplete(function(data){
              if (Number(data.misMatchPercentage) <= 0.05) {
                expect(data.misMatchPercentage).to.be.below(0.05);
                resolve(data);
              } else {
                var stream = data.getDiffImage().pack().pipe(fs.createWriteStream(root + fileName + '.failure.png'));
                stream.on('finish', function(){
                  expect(data.misMatchPercentage).to.be.below(0.05);
                  resolve(data);
                });
              };
            });
        };
      });
    });
  };

  function cropInFile(size, location, srcFile) {
    return easyimg.crop({
      src: srcFile,
      dst: srcFile,
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
        console.log(err);
      }
    );
  };
};
