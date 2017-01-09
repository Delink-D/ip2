var gulp    = require('gulp')
    sass    = require('gulp-sass')
    concat  = require('gulp-concat')
    sourcemaps = require('gulp-sourcemaps')
	  lib     = require('bower-files')()
    source  = require('vinyl-source-stream')
    utilities = require('gulp-util')
    del = require('del')
    browserSync = require('browser-sync').create()
    buildProduction = utilities.env.production
    browserify = require('browserify');

gulp.task('default',function(){
  console.log("working!");
});

gulp.task('cssBuild', function() {
	return gulp.src(['scss/*.scss'])
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('build/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('scss/*.scss', ['scss']);
});

// gulp.task('jsBrowserify', function() {
//   return browserify({ entries: ['./js/receive_user.js'] })
//     .bundle()
//     .pipe(source('app.js'))
//     .pipe(gulp.dest('./build/js'));
// });

gulp.task('build', ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
  gulp.start('bower');
  gulp.start('cssBuild');
});

gulp.task("clean", function(){
  return del(['build', 'tmp']);
});

gulp.task('concatI', function() {
  return gulp.src(['./js/*.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify', ['concatI'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('bowerJS', function () {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('bowerCSS', function () {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./build/css'));
});

var lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });

  gulp.watch(['js/*.js'], ['jsBuild']);
});

gulp.task('bowerBuild', ['bower'], function(){
  browserSync.reload();
});