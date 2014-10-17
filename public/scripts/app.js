(function(window, angular) {
	"use strict";

	var app = angular.module("app", ["ngRoute"]);

	app.config(function($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "/views/products.html",
				controller: "productsController"
			})
			.when("/cart", {
				templateUrl: "/views/shoppingCart.html",
				controller: "shoppingCartController"
			})
			.otherwise({
				templateUrl: "/views/notFound.html"
			});
	});

	window.app = app;

} (window, window.angular));