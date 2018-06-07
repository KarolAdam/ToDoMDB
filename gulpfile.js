var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

function swallowError (error) {
    console.log(error);
    this.emit('end')
}

gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .on('error', swallowError)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', ['sass'])
})

gulp.task('default', ['sass', 'watch']);