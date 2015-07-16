var gulp = require('gulp');
var exec = require('child_process').exec;
var argv = require('yargs').argv;
var ts = require('gulp-typescript');
var nodemon = require('gulp-nodemon');
//var livereload = require('gulp-livereload');

gulp.task('copy', function () {
    // almond
    gulp.src('bower_components/almond/almond.js')
        .pipe(gulp.dest('web/app/vendor/almond'));

    // requirejs
    gulp.src('bower_components/requirejs/require.js')
        .pipe(gulp.dest('web/app/vendor/requirejs'));

    // rjs
    gulp.src('bower_components/rjs/dist/r.js')
        .pipe(gulp.dest('.'));
});

gulp.task('rjs', function (cb) {
    var env = argv.env ? argv.env : 'dev',
        cmd = [
            //'php app/console cache:clear --env=' + env,
            //'php app/console assets_version:increment --env=' + env,
            //'php app/console assetic:dump --env=' + env,
            'node r.js -o web/app/app.build.js'
        ];

    exec(cmd.join(' && '), function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('typescript', function(){
    gulp.src('./server/**/*')
        .pipe(ts({module: 'commonjs'}))
        .js
        .pipe(gulp.dest('./dist/server'))
});

gulp.task('watch', function () {
   gulp.watch('./server/**/*', ['typescript']);
});

gulp.task('serve', ['watch'], function () {
    //livereload.listen();
    nodemon({
        script: './dist/server/index',
        ext: 'js'
    }).on('reload', function () {
        //setTimeout(function () {
        //    livereload.changed();
        //}, 500);
    });
});

//gulp.task('deploy')

gulp.task('build', ['copy', 'rjs']);
gulp.task('default', ['build']);
