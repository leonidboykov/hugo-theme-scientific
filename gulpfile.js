var gulp         = require('gulp');
    sass         = require('gulp-sass'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    mqpacker     = require('css-mqpacker'),
    cssnano      = require('cssnano');


// Sass processing
gulp.task('sass', function() {
  var plugins = [
    autoprefixer({ browsers: ['last 2 versions', '> 2%'] }),
    mqpacker,
    cssnano
  ];
  return gulp.src('./sass/**/*.{scss,sass}')
    .pipe(sass({
      outputStyle: 'compressed',
    }))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./static/css/'));
});

// Default task
gulp.task('default', ['watch']);

gulp.task('build', ['sass']);

gulp.task('watch', function() {
  // Sass changes
  gulp.watch('./sass/**/*', ['sass']);
});
