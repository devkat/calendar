var
  gulp = require('gulp'),
  paths = require('../paths'),
  del = require('del'),
  vinylPaths = require('vinyl-paths');

// deletes all files in the output path
gulp.task('clean', function() {
  return gulp.src([paths.output])
    .pipe(vinylPaths(del));
});