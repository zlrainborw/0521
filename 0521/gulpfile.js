var gulp=require('gulp');

var server=require('gulp-webserver');

var sass=require('gulp-sass');

gulp.task('css',function(){
    gulp.src('./src/css/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
})
gulp.task('server',function(){
    gulp.src('./src')
    .pipe(server({
        port:9090,
        open:true
    }))
})