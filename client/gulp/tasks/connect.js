var
  gulp = require('gulp'),
  connect = require('gulp-connect'),
  proxy = require('http-proxy-middleware'),
  paths = require('../paths');

gulp.task('connect', function() {
  connect.server({
    root: ['.', paths.output],
    port: 8000,
    livereload: true,
    middleware: function(connect, opt) {
      return [
        proxy('/api', {target: 'http://localhost:8080/', changeOrigin: true})
      ];
    }
  });
});