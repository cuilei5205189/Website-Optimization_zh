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
    gulp.src(['/js/*.js'])
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Minify JS files used in index.
gulp.task('minifyScripts', function() {
    gulp.src("src/js/perfmatters.js")
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('dist/js'));
});

// Concat CSS
gulp.task('concatCSS', function() {
    gulp.src([
        'src/css/print.css',
        'src/css/style.css'
        ])
        // .pipe(concat('main.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'));
});

// minify CSS
gulp.task('minifyCSS', function() {
    gulp.src(['views/css/style.css'])
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('views/css'));
});

// Minify HTML
gulp.task('minifyHTML', function() {
    gulp.src("src/index.html")
        .pipe(minifyHTML())
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist'));
});

// optimize images
gulp.task('images', function(){
   gulp.src(['img/**/*.+(png|jpg|gif|svg)',
   'views/images//**/*.+(png|jpg|gif|svg)'])
  .pipe(imagemin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('dist/'))
});

// clean
gulp.task('clean', function() {
    return del(['dist']);
});


//批量执行任务
gulp.task('build', function(cb) {
    runSequence('clean', ['minifyHTML', 'concatScripts','concatCSS', 'images'], cb);
});
