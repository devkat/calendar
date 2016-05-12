var
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  typescript = require('gulp-tsb'),
  sourcemaps = require('gulp-sourcemaps'),
  plumber = require('gulp-plumber'),
  changed = require('gulp-changed')
  connect = require('gulp-connect'),
  runSequence = require('run-sequence'),
  paths = require('../paths');


var tsCompiler = tsCompiler || null;
gulp.task('build-ts', function() {
  if(!tsCompiler) {
    tsCompiler = typescript.create(require('../../tsconfig.json').compilerOptions);
  }
  return gulp.src(paths.dtsSrc.concat(paths.source))
    .pipe(plumber())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(tsCompiler())
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/src'}))
    .pipe(gulp.dest(paths.output))
    .pipe(connect.reload());
});

gulp.task('build-html', function() {
  return gulp.src(paths.html)
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(gulp.dest(paths.output))
    .pipe(connect.reload());
});

gulp.task('build-scss', function() {
  return gulp.src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.output))
    .pipe(connect.reload());
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-ts', 'build-html', 'build-scss'],
    callback
  );
});