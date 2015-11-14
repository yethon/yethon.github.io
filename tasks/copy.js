var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');
var recompress = require('imagemin-jpeg-recompress');

// copy static assets into the 'dist' folder
gulp.task('copy-images', function () {
  return gulp.src('assets/img/**.*')
  .pipe(recompress({
    loops: 10,
    acurate: true,
    quality: 'low',
    target: 0.1,
    max: 10
  })())
  .pipe(gulp.dest('./dist/assets/img'));
});

gulp.task('copy-index', function () {
  return gulp.src('index.html')
  .pipe(gulp.dest('./dist'));
});
