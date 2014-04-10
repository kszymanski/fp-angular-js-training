module.exports = function (config) {
	config.set({
		basePath: "..",
		singleRun: false,
		autoWatch: true,

		frameworks: ["jasmine"],
		
		browsers: ["Chrome", "PhantomJS", "Firefox"],

		files: [
			"public/scripts/libs/jquery.js",
			"public/scripts/libs/angular.js",
			"public/scripts/libs/angular-route.js",
			"public/scripts/libs/angular-resource.js",
			"public/scripts/libs/angular-mocks.js",
			"public/scripts/app.js",
			"public/scripts/*.js"
		]
	});
};