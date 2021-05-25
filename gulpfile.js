let gulp = require ('gulp');
let browserSync = require('browser-sync').create();


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});



gulp.task('styles', function(){
    return gulp.src('css/*.css')
    .pipe(gulp.dest('production/css/')),
    console.log('Все успешно');
});
