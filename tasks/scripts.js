var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');

// run jshint and output any errors
// copy uglified javascript into 'dist' folder
gulp.task('scripts', function() {
  return gulp.src('assets/js/**.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish))
  .pipe(concat('site.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/assets/js'));
});
