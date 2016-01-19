'use strict'

let gulp = require('gulp');
let webpack = require('webpack')
let gutil = require('gulp-util')
var WebpackDevServer = require("webpack-dev-server");
let webpackConfig = require("./webpack.config.js")
let del = require('del')

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('develop', ['build', 'webpack-dev-server', 'watch'])

gulp.task('watch', function(){
    gulp.watch(['app/*.js', 'app/**/**/*.js'], ['build'])
})

gulp.task('build', ['clean', 'build:js', 'build:html'])

gulp.task('clean', function(){
  return del(['dist/assets/*.js', 'dist/*.html'])
})

gulp.task('build:js', function(callback){

  // modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({

		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

	// run webpack
	webpack(myConfig, function(err, stats) {
		if(err) { throw new gutil.PluginError("webpack:build", err) }
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
		callback();
	});
})

gulp.task('build:html', function(){
  return gulp.src('app/index.html')
  .pipe(gulp.dest('dist'))
})

gulp.task("webpack-dev-server", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.devtool = "eval";
	myConfig.debug = true;

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
		contentBase: myConfig.output.publicPath,
		stats: {
			colors: true
		}
	}).listen(8080, "localhost", function(err) {
		if(err) { throw new gutil.PluginError("webpack-dev-server", err); }
		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
	});

  if (callback) {
    callback()
  }

})
