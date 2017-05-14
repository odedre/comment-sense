const gulp = require('gulp')
const babel = require('gulp-babel')

let commonBuild = (src, dest) => gulp.src([src])
        .pipe(babel({
          presets: ['es2015']
        }))
        .pipe(gulp.dest(dest))

gulp.task('build:src', () => commonBuild('lib/**/*.js', 'dist/src'))
gulp.task('build:test', () => commonBuild('test/**/*.js', 'dist/test'))

gulp.task('build', ['build:src', 'build:test'], function () {})
