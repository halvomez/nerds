var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function() {
<<<<<<< HEAD
    gulp.src("sass/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"));
} );
=======
  gulp.src("sass/style.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"));
});
>>>>>>> 1b3d0266b5c6689514ff0b2d012b412d75a17ac8
