var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require(gulp-sass);

gulp.task('serve' ['sass'], function(){
    browserSync.init({
        server: "./src"
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'],['sass']);
    gulp.watch("src/*.html").on('change',browserSync.reload);
});




gulp.task('default', ['js','serve']);
