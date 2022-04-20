const gulp = require("gulp");
const pug = require("gulp-pug");
const fs = require("fs");
const files = ["data"];

function compilePug() {
  const data = files.reduce((acc, item) => {
    return {
      ...acc,
      [item]: JSON.parse(fs.readFileSync("./data/" + item + ".json", "utf8")),
    };
  }, {});
  return gulp
    .src("./source/pug/**/!(_)*.pug")
    .pipe(
      pug({
        pretty: true,
        data,
      })
    )
    .pipe(gulp.dest("./build"));
}

function watchPug() {
  gulp.watch(
    ["source/pug/**/*.pug", "./data/.json"],
    { ignoreInitial: false },
    compilePug
  );
}


exports.compilePug = compilePug;
exports.watchPug = watchPug;
