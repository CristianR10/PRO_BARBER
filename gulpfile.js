var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('copilar-less', function () {
    return gulp.src(['*.less', 'less/*.less',])
        .pipe(less().on('error', function (error) {
            console.log(error);
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('css'))
});

gulp.task('monitorar', function () {
    gulp.watch(['*.less', 'less/*.less'], gulp.series('copilar-less'));
});

gulp.task('default', gulp.series('monitorar'));