var gulp = require('gulp');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');
  var rename = require('gulp-rename');
  var minifyCSS = require('gulp-minify-css');
  var imagemin = require('gulp-imagemin');
  var minifyHTML = require('gulp-minify-html');

// Concat multiple JS files.
gulp.task("concatScripts", function(){
    gulp.src([
        'js/file1.js',
        'js/file2.js',
        'js/file2.js'
        ])
    .pipe(concat(app.js))
    .pipe(gulp.dest('js'));
});

// Minify JS files used in index.
gulp.task('minifyScripts', function() {
    gulp.src("js/perfmatters.js")
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('production/js'));
});

// Concat CSS
gulp.task('concatCSS', function() {
    gulp.src([
        'css/print.css',
        'css/style.css'
        ])
        .pipe(rename('main.css'))
        .pipe(gulp.dest('css'));
});

// Minify CSS
gulp.task('minifyCSS', function() {
    gulp.src("css/main.css")
        .pipe(minifyCSS())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('production/css'));
});

// Minify HTML
gulp.task('minifyHTML', function() {
    gulp.src("index.html")
        .pipe(minifyHTML())
        .pipe(rename('index.html'))
        .pipe(gulp.dest('production'));
});

// optimize images
gulp.task('images', function(){
  return gulp.src(['img/**/*.+(png|jpg|gif|svg)',
                    'views/images//**/*.+(png|jpg|gif|svg)'])
  .pipe(imagemin())
  .pipe(gulp.dest('production/img'))
});

// test task
gulp.task('hello', function() {
  console.log('Hello Zell');
});
