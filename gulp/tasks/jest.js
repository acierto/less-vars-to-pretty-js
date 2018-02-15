import gulp from 'gulp';
import jest from 'gulp-jest';
import env from 'gulp-env';
import packageJson from '../../package.json';

gulp.task('jest', () => {
    env.set({BABEL_ENV: 'test'});
    return gulp.src('.').pipe(jest(packageJson.jest));
});
