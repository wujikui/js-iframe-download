const gulp = require('gulp');
const shell = require('gulp-shell');


gulp.task('build:src', shell.task('rollup -c'));
gulp.task('watch:build:src', shell.task('rollup -c -w'));

gulp.task('run:test_server', shell.task('node test_server/bootstrap.js'));

gulp.task('dev', ['watch:build:src', 'run:test_server']);
gulp.task('build', ['build:src']);
