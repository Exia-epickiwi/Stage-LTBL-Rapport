const gulp = require('gulp')
const latex = require('gulp-latex')

gulp.task('default',['etonnement','rapport'], () => {})

gulp.task('etonnement', () => {
	return gulp.src('Rapport-d-etonnement/rapport-d-etonnement.tex')
		.pipe(latex())
		.pipe(gulp.dest('rapports'))
})

gulp.task('rapport', () => {
	return gulp.src('Rapport-de-stage/rapport-de-stage.tex')
		.pipe(latex())
		.pipe(gulp.dest('rapports'))
})

gulp.task('watch', ['default'], () => {
	gulp.watch('Rapport-d-etonnement/*.tex', ['etonnement'])
	gulp.watch('Rapport-de-stage/*.tex', ['rapport'])
})