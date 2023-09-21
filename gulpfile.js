const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const sourcemap = require('gulp-sourcemaps')
const concat = require("gulp-concat")
const imagemin = require('gulp-imagemin')
const uglify = require("gulp-uglify")
const inject = require('gulp-inject')
const htmlmin = require('gulp-htmlmin')

function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(uglifycss({"ugliComments":true}))
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest('./dist/styles'))
}

function images(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

function script(){
    return gulp.src("./src/js/*.js")
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest("./dist/scripts"))
}

function html(){

    let target = gulp.src('./index.html')
    let sources = gulp.src(['./dist/scripts/main.min.js', './dist/styles/main.min.css'], {read: false,allowEmpty: true})

    return target
    .pipe(inject(sources))
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(gulp.dest('./dist'))
}

exports.default = gulp.series(styles, images, script, html)

exports.dev = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}