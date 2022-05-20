const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("./src/assets/scss/styles.scss").pipe(sass()).pipe(dest("./src"));
}

function watchTask() {
  watch(["styles.scss"], buildStyles());
}

exports.default = series(buildStyles, watchTask);
