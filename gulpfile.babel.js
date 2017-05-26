'use strict';

import babel from 'gulp-babel';
import gulp from 'gulp';
import eslint from 'gulp-eslint';
import fileinclude from 'gulp-file-include';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

const dirs = {
    src: 'src',
    dest: 'build'
};


/**
 * Source code locations
 */
const source = {
    html: [
        `${dirs.src}/html/**/*`,
    ],
    js: [
        `${dirs.src}/js/**/*`,
    ],
    sass: [
        `${dirs.src}/scss/app.scss`,
    ]
};


/**
 * Compile SASS files.
 */
gulp.task('sass', () => {
    return gulp.src(source.sass)
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(`${dirs.dest}/styles/`));
});


/**
 * Lint javascript files.
 */
gulp.task('lintjs', function() {
    return gulp.src(source.js)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


/**
 * Copy javascript.
 */
gulp.task('js', function() {
    return gulp.src(source.js, {base: `${dirs.src}/js`})
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(`${dirs.dest}/js`));
});


/**
 * Compile HTML.
 */
gulp.task('html', function() {
  gulp.src(source.html)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(dirs.dest));
});


/**
 * Build all static assets.
 */
gulp.task('build', [
    'lintjs',
    'sass',
    'js',
    'html',
]);


/**
 * The default task is just to run a build.
 */
gulp.task('default', ['build']);