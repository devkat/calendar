var
  gulp = require('gulp'),
  paths = require('../paths'),
  tslint = require('gulp-tslint');

gulp.task('lint', function() {
  return gulp.src(paths.source)
    .pipe(tslint())
    .pipe(tslint.report('prose', {
      emitError: false
    }));
});