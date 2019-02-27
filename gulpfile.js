var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');

// Static Server + watching scss/html files

gulp.task('serve', function() {

    browserSync.init({
        server: "src/"
    });

    gulp.watch('src/sass/**/*.scss', gulp.parallel('sass'));
    gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('html', function() {
    return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concatCss('main.css'))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

gulp.task('default', gulp.parallel('serve', 'html', 'sass'));