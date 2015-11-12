var gulp        = require('gulp');
var browserSync = require('browser-sync');

// log a friendly message when an asset changes
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// automatically reload browsers when an asset changes
gulp.task('watch', function () {
  gulp.watch(['assets/styles/**.css', 'assets/styles/**.scss'], ['styles']).on('change', reportChange);
  gulp.watch('assets/js/**.js', ['scripts', browserSync.reload]).on('change', reportChange);
  gulp.watch('index.html', ['copy-index']).on('change', reportChange);
  gulp.watch(['./dist/index.html', './dist/assets/img/**.*'], browserSync.reload);
  gulp.watch('assets/img/**.*', ['copy-images']).on('change', reportChange);
});
