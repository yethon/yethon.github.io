var gulp = require('gulp');
var del  = require('del');

// delete everything in the 'dist' folder
gulp.task('clean', function (){
  return del(['./dist/**'], {force: true});
});
