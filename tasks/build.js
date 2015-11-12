var gulp        = require('gulp');
var runSequence = require('run-sequence');

// 'dist' contains the latest minifined and uglified build
// your site is always ready to be deployed
gulp.task('build', function(callback) {
  runSequence('clean',
             ['styles', 'copy-index', 'scripts'],
              'copy-images',
              callback);
});
