var gulp = require('gulp');
var webdriver = require('gulp-webdriver'); //the v4 way

//this is how any suite should be approached; their configs are defined within
//their individual tasks and all tasks in the array will execute asynchronously.
gulp.task('webdriver:suite', ['webdriver:demo']);

//individual tasks will follow the below patterns
gulp.task('webdriver:demo', function() {
    return gulp.src('./config/wdio.config.js').pipe(webdriver({
        logLevel: 'silent',
        waitforTimeout: 35000,
        reporter: 'spec',
    }));
});
