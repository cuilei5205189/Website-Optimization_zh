var gulp = require('gulp');
  concat = require('gulp-concat');
  uglify = require('gulp-uglify');
  rename = require('gulp-rename');
  minifyCSS = require('gulp-minify-css');
  imagemin = require('gulp-imagemin');
  minifyHTML = require('gulp-minify-html');
  del = require('del');
  runSequence = require('run-sequence'),


// Concat multiple JS files.
gulp.task("concatScripts", function(){
    gulp.src(['src/js/*.js', '!src/js/perfmatters.js'])
        .pipe(concat('main.js'))
        // .pipe(rename({suffix: '.min'}))
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Minify JS files used in index.
gulp.task('minifyScripts', function() {
    gulp.src("js/perfmatters.js")
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('dist/js'));
});

// Concat CSS
gulp.task('concatCSS', function() {
    gulp.src([
        'css/print.css',
        'css/style.css'
        ])
        .pipe(rename('main.css'))
        .pipe(gulp.dest('dist/css'));
});

// Minify CSS
gulp.task('minifyCSS', function() {
    gulp.src("css/main.css")
        .pipe(minifyCSS())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('dist/css'));
});

// Minify HTML
gulp.task('minifyHTML', function() {
    gulp.src("index.html")
        .pipe(minifyHTML())
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist'));
});

// optimize images
gulp.task('images', function(){
  return gulp.src(['img/**/*.+(png|jpg|gif|svg)',
                    'views/images//**/*.+(png|jpg|gif|svg)'])
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'))
});

// clean
gulp.task('clean', function() {
    return del(['dist']);
});


//批量执行任务
gulp.task('build', function(cb) {
    runSequence('clean', ['minifyHTML', 'minifyCSS', 'concatScripts','concatCSS', 'images'], cb);
});
