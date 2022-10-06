const gulp = require('gulp'),
      concat = require('gulp-concat'),
      purgecss = require('gulp-purgecss'),
      sourcemaps = require('gulp-sourcemaps'),
      sass = require('gulp-sass')(require('sass'));
      browserSync = require('browser-sync').create();

function copy(cb) {
  gulp.src([
    './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map'
  ]) 
    .pipe(gulp.dest('./js/'));
  gulp.src([
    './node_modules/animate.css/animate.css'
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
    './node_modules/bootstrap/dist/css/bootstrap.min.css.map',
    './node_modules/bootstrap-icons/font/bootstrap-icons.css'
  ])
    .pipe(gulp.dest('./css/'));
  gulp.src([
    './node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff',
    './node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2',
  ])
    .pipe(gulp.dest('./css/fonts/'));
  console.log("Copy assets 📦 ");
  cb();
}

function build(cb) {
  gulp.src([
    './css/styles.css',
    './css/custom.css'
  ])
    .pipe(concat('site.css'))    
    .pipe(gulp.dest('./css/'));
  gulp.src([
    './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    './js/scripts.js'
  ])
    .pipe(concat('site.js'))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./js/'));
  console.log("Assets built 🔧 ");
  cb();
}

function purge (cb) {
  gulp.src('./css/site.css')
    .pipe(purgecss({
      content: ['./*.html', './js/*.js']
    }))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css/'));
  console.log("CSS purged 🧹 ");
  cb();
}

function clean (cb) {
  gulp.src('./css/site.css')
  .pipe(cleanCSS({level: {1: {specialComments: 0}}}))
  .pipe(gulp.dest('./css/'));
  console.log("CSS cleaned 🧹 ");
  cb();
}

function mixin() {
  return gulp.src('./css/*.scss', { sourcemaps: true })
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());
}

function reload(cb) {
  browserSync.reload();
  cb();
}

function run() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "/index.html"
    }
  });
  gulp.watch(['./css/*.scss','./css/styles.css']).on('change', gulp.series(mixin, build));
  gulp.watch('./js/scripts.js', gulp.series(build));
  gulp.watch('./*.html', reload);
  gulp.watch([
    './css/site.css',
    './js/site.js' 
  ]).on('change',browserSync.reload);
  console.log("🔥 Run");
}

exports.copy = copy;
exports.build = build;
exports.purge = purge;
exports.clean = clean;
exports.mixin = mixin;
exports.run = run;