var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

function printError(err) {
    console.log('Error: ' + err.message);
}

gulp.task('copy', function () {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['copy'], function () {
    return browserify('./src/app.js', {debug: true})
        .transform(babelify)
        .on('error', printError)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
    gulp.watch('./src/**', ['build']);
});

gulp.task('serve', ['build', 'watch'], function () {
    connect.server({
        root: './dist/'
    });
});

// gulp.task('lint'); Use ESLint

gulp.task('default', ['build']);
