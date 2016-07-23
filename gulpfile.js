var gulp = require('gulp');
var webdriver = require('gulp-webdriver');

var opts = {
    logLevel: 'silent',
    waitforTimeout: 10000,
    reporter: 'spec',
};

gulp.task('webdriver:suite', ['webdriver:demo']);

gulp.task('amazon:demo', function() {
    return gulp.src('./config/wdio.amazon.js').pipe(webdriver(opts));
});

gulp.task('visual:demo', function() {
    return gulp.src('./config/wdio.visual.js').pipe(webdriver(opts));
});

gulp.task('webdriver:demo', function() {
    return gulp.src('./config/wdio.config.js').pipe(webdriver(opts));
});
