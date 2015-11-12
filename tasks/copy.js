var gulp        = require('gulp');

// copy static assets into the 'dist' folder
gulp.task('copy-images', function () {
  return gulp.src('assets/img/**.*')
    .pipe(gulp.dest('./dist/assets/img'));
});

gulp.task('copy-index', function () {
  return gulp.src('index.html')
    .pipe(gulp.dest('./dist'));
});
