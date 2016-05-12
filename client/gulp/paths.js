var appRoot = 'src/';
var outputRoot = 'build/';

module.exports = {
    root: appRoot,
    source: appRoot + '**/*.ts',
    html: appRoot + '**/*.html',
    scss: appRoot + '**/*.scss',
    output: outputRoot,
    dtsSrc: [
        './typings/browser/**/*.d.ts',
        './jspm_packages/**/*.d.ts'
    ]
}