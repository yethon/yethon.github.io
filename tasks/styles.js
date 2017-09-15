var gulp         = require('gulp');
var concatCss    = require('gulp-concat-css');
var cleanCSS     = require('gulp-clean-css');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// compile scss files, add prefixes if applicable, and concat all subsequent css
// minify css and copy to 'dist' folder
gulp.task('styles', function () {
  return gulp.src(['assets/styles/**.css', 'assets/styles/**.scss'])
  .pipe(sass())
  .pipe(autoprefixer( {
    browsers:  [
      'ie >= 10',
      'ie_mob >= 10',
      'ff >= 30',
      'chrome >= 34',
      'safari >= 7',
      'opera >= 23',
      'ios >= 7',
      'android >= 4.4',
      'bb >= 10'
    ],
    cascade: false
  }))
  .pipe(concatCss('site.min.css'))
  .pipe(cleanCSS({compatibility: 'ie9'}))
  .pipe(gulp.dest('./dist/assets'))
  .pipe(browserSync.stream());
});
