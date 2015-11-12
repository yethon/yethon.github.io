var gulp        = require('gulp');
var browserSync = require('browser-sync');

// launch a browser and serve the site from 'dist' folder
gulp.task('server', function () {
  browserSync.init({
    server: './dist'
  });
});
