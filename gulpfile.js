var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");

var sassFiles = "src/static/scss/**/*.scss",
    cssDest = "src/static/css/";

gulp.task("styles", function () {
    gulp.src(sassFiles)
        .pipe(sass().on("error", sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest(cssDest));
});

gulp.task("watch",function () {
    gulp.watch(sassFiles,["styles"]);
});

gulp.task("default", ["watch"]);
