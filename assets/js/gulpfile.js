const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

gulp.task('minify-css', () => {
  return gulp.src('assets/css/*.css')  // Seleciona todos os arquivos CSS
    .pipe(concat('style.min.css'))     // Concatena todos os arquivos em um único arquivo
    .pipe(cleanCSS({ compatibility: 'ie8' }))  // Minifica o CSS
    .pipe(gulp.dest('dist/css'));      // Salva o resultado na pasta 'dist/css'
});

gulp.task('default', gulp.series('minify-css')); // Define a tarefa padrão

// npm install gulp gulp-clean-css gulp-concat --save-dev
