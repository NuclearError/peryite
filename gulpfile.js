// Gulp
var gulp = require('gulp');

// Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var stripDebug = require('gulp-strip-debug');
var todo = require('gulp-todo');
var sass = require('gulp-ruby-sass');
var cache = require('gulp-cache');

// GULP TASKS //

// Compile and minify SCSS to CSS
gulp.task('compileCSS', function() {
    return sass('app/scss/styles.scss', {style: 'compressed'})
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/css'));
});

// Compile and minify theme styling
gulp.task('compileThemes', function() {
    return sass('app/themes/*/styles.scss', {style: 'compressed'})
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/themes'));
});

// Concatenate and minify JS  
gulp.task('tidyJS', function() {
    return gulp.src('app/js/*.*')
    	// .pipe(stripDebug()) // comment this out when developing to allow console logs
      	// .pipe(concat('scripts.js'))
        // .pipe(rename({suffix: '.min'}))
        /*
        .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
        */
        .pipe(gulp.dest('public/js'));
});

// generate todo.md from JS files 
gulp.task('generateToDoList', function() {
    gulp.src('app/js/*.js')
        .pipe(todo())
        .pipe(gulp.dest('app/'));
});

// Copy dev images to public location 
// (usually some kind of compression would take place here)
gulp.task('copyImages', function() {
    gulp.src('app/img/*.*')
    .pipe(gulp.dest('public/img/'));
});

// Copy index file and other HTML files to public location 
gulp.task('copyIndex', function() {
    gulp.src('app/*.html')
    .pipe(gulp.dest('public/'));  
});

// Watch files for changes
gulp.task('watchFiles', function() {
  gulp.watch('app/js/*.js', ['tidyJS', 'generateToDoList']);
  gulp.watch('app/scss/*.scss', ['compileCSS']);
  gulp.watch('app/themes/*.scss', ['compileThemes']);
  gulp.watch('app/img/*.*', ['copyImages']);
  gulp.watch('app/*.html', ['copyIndex']);
});

// Gulp Tasks
gulp.task('default', ['tidyJS', 'compileCSS', 'compileThemes', 'generateToDoList', 'copyImages', 'copyIndex', 'watchFiles']);
