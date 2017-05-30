'use strict';

import babel from 'gulp-babel';
import exec from 'gulp-exec';
import gulp from 'gulp';
import eslint from 'gulp-eslint';
import fileinclude from 'gulp-file-include';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

const dirs = {
    src: 'src',
    dest: 'docs'
};


/**
 * Source code locations
 */
const source = {
    code: [
        `${dirs.src}/code/**/*.*`,
    ],
    css: [
        `${dirs.src}/css/**/*`,
    ],
    html: [
        `${dirs.src}/html/index.html`,
    ],
    js: [
        `${dirs.src}/js/**/*`,
    ],
    sass: [
        `${dirs.src}/scss/**/!(_*.scss)s`,
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
        .pipe(gulp.dest(`${dirs.dest}/css/`));
});


/**
 * Lint javascript files.
 */
gulp.task('lintjs', function () {
    return gulp.src(source.js)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


/**
 * Copy javascript.
 */
gulp.task('js', function () {
    return gulp.src(source.js, {base: `${dirs.src}/js`})
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(`${dirs.dest}/js`));
});


/**
 * Pygmentize (Convert code to HTML)
 */
gulp.task('highlight', function () {
    const options = {
        continueOnError: false, // default = false, true means don't emit error event
        pipeStdout: true, // default = false, true means stdout is written to file.contents
    };

    return gulp.src(source.code)
        .pipe(exec('pygmentize -f html <%= file.path %>', options))
        .pipe(gulp.dest(`${dirs.src}/html/include/code`))
});


/**
 * Compile HTML.
 */
gulp.task('html', function () {
    return gulp.src(source.html)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(dirs.dest));
});


/**
 * Copy CSS.
 */
gulp.task('css', function () {
    return gulp.src(source.css)
        .pipe(gulp.dest(`${dirs.dest}/css`));
});


/**
 * Build all static assets.
 */
gulp.task(
    'build',
    [
        'lintjs',
        'js',
        'sass',
        'css',
        'highlight',
    ],
    function () {
        gulp.start('html');
    }
);


/**
 * The default task is just to run a build.
 */
gulp.task('default', ['build']);
