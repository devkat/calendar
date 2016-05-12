var
  gulp = require('gulp'),
  runSequence = require('run-sequence');

gulp.task('default', function(callback) {
  return runSequence(
    'build',
    ['connect', 'watch'],
    callback
  )
});
