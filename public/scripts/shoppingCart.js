(function(angular) {
	"use strict";

	angular.module("app").service("shoppingCart", function() {
		var cart = {};

		this.addProduct = function(product) {
			if (!cart[product.id]) {
				cart[product.id] = { product: product, quantity: 1 };
			} else {
				cart[product.id].quantity += 1;
			}

		};

		this.removeAll = function() {
			cart = {};
		};

		this.getProducts = function() {
			var contents = [];

			for (var id in cart) {
				if (cart.hasOwnProperty(id)) {
					contents.push(cart[id]);
				}
			}

			return contents;
		};

		this.getProductsForOrder = function() {
			var contents = [];

			for (var id in cart) {
				if (cart.hasOwnProperty(id)) {
					contents.push({
						productId: id,
						quantity: cart[id].quantity
					});
				}
			}
		};

		this.getItemCount = function() {
			var count = 0;
			for (var id in cart) {
				if (cart.hasOwnProperty(id)) {
					count += cart[id].quantity;
				}
			}

			return count;
		};
	});

}(window.angular));