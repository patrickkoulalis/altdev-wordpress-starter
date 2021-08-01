var gulp = require('gulp'),

var $ = gulpLoadPlugins();
// Handle SCSS
gulp.task('styles', function () {

});

// Minify CSS
gulp.task('styles:assets', ['styles'], function () {
  return gulp.src(['assets/styles/*.css'])
    .pipe($.cssnano())
    .pipe(gulp.dest('assets/styles'));
});

// Handle JS
gulp.task('javascript', function () {
  return gulp.src([
    'vendor/javascript/*.js',
    'src/javascript/main.js'
  ])
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.concat('main.js'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('assets/javascript'));
});

// Minify JS
gulp.task('javascript:assets', ['javascript'], function () {
  // Separating main js handling and other js libraries, as uglify will sometimes break already minified js libraries like bootstrap etc.
  return es.merge([
    gulp.src([
      'src/javascript/main.js'
    ])
      .pipe(uglify())
      .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
      .pipe(gulp.dest('assets/javascript')),
    gulp.src([
      'vendor/javascript/*.js',
      'assets/javascript/main.js'
    ])
      .pipe($.plumber())
      .pipe($.concat('main.js'))
      .pipe(gulp.dest('assets/javascript'))
  ])
});

// Handle fonts
gulp.task('fonts', function () {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('assets/fonts'));
});

// Optimize images
gulp.task('images', function () {
  return gulp.src('src/images/**/*')
    .pipe($.if($.if.isFile, $.cache($.imagemin({
      progressive: true,
      interlaced: true,
    //  svgoPlugins: [{ cleanupIDs: false }]
    }))
    .on('error', function (err) {
      console.log(err);
      this.end();
    })))
    .pipe(gulp.dest('assets/images'));
});

gulp.task('clean', del.bind(null, ['assets']));
gulp.task('watch', ['images', 'styles', 'javascript', 'fonts'], function () {

  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/javascript/**/*.js', ['javascript']);
  gulp.watch('src/images/**/*', ['images']);
  gulp.watch('src/fonts/**/*', ['fonts']);
});

/* 'gulp' or 'gulp build' will compile the source files and minify, without generating source mapping. For PRODUCTION. */
gulp.task('build', ['images', 'fonts', 'styles:assets', 'javascript:assets'], function () {
  return gulp.src('assets/**/*').pipe($.size({ title: 'build', gzip: true }));
});

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
