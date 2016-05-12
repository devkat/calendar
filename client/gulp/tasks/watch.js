var
  gulp = require('gulp'),
  paths = require('../paths');

gulp.task('watch', function() {
  gulp.watch([paths.source], ['build-ts', 'lint']);
  gulp.watch([paths.html], ['build-html']);
  gulp.watch([paths.scss], ['build-scss']);
});
