var gulp = require('gulp');
var webdriver = require('gulp-webdriver');

gulp.task('webdriver:suite', ['webdriver:demo']);

gulp.task('amazon:demo', function() {
    return gulp.src('./config/wdio.amazon.js').pipe(webdriver({
        logLevel: 'silent',
        waitforTimeout: 35000,
        reporter: 'spec',
    }));
});

gulp.task('webdriver:demo', function() {
    return gulp.src('./config/wdio.config.js').pipe(webdriver({
        logLevel: 'silent',
        waitforTimeout: 35000,
        reporter: 'spec',
    }));
});
