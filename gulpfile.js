const gulp = require("gulp"),
  sass = require("gulp-sass"),
  sourcemap = require("gulp-sourcemaps"),
  imagemin = require("gulp-imagemin"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  babel = require("gulp-babel"),
  uglifycss = require("gulp-uglifycss"),
  autoprefixer = require("gulp-autoprefixer"),
  browserSync = require("browser-sync").create(),
  svgSprite = require("gulp-svg-sprite"),
  cheerio = require("gulp-cheerio"),
  replace = require("gulp-replace"),
  svgmin = require("gulp-svgmin");

function html() {
  return gulp.src("./src/**/*.html").pipe(gulp.dest("./docs"));
}

function style() {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(sourcemap.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer("last 2 version"))
    .pipe(uglifycss())
    .pipe(sourcemap.write("../maps"))
    .pipe(gulp.dest("./docs/css"))
    .pipe(browserSync.stream());
}

function javascript() {
  return gulp
    .src("./src/js/*.js")
    .pipe(concat("main.js"))
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("./docs/js"));
}

function imgmin() {
  return gulp
    .src("./src/img/*")
    .pipe(
      imagemin([
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 })
      ])
    )
    .pipe(gulp.dest("./docs/img"));
}

function svg() {
  return gulp
    .src("./src/svg/*.svg")
    .pipe(
      svgmin({
        js2svg: {
          pretty: true
        }
      })
    )
    .pipe(
      cheerio({
        run: function($) {
          $("[fill]").removeAttr("fill");
          $("[style]").removeAttr("style");
        },
        parserOptions: { xmlMode: true }
      })
    )
    .pipe(replace("&gt;", ">"))
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: "./sprite.svg"
          }
        }
      })
    )
    .pipe(gulp.dest("./docs/sprite/"));
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./docs/"
    }
  });
  gulp
    .watch("./src/**/*.html")
    .on("change", gulp.series([html, browserSync.reload]));
  gulp
    .watch("./src/scss/**/*.scss")
    .on("change", gulp.series([html, style, browserSync.reload, imgmin]));
  gulp
    .watch("./src/js/**/*.js")
    .on("change", gulp.series([javascript, browserSync.reload, imgmin]));
  gulp.watch("./docs/**/*.html").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
exports.javascript = javascript;
exports.imgmin = imgmin;
exports.svg = svg;
