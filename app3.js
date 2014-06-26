(function() {
	var app = angular.module('store', []);
	
	app.controller('StoreController', function(){
		this.products = gems;
		});
		
		var gems = [
		{
			name: 'Dodecahedron1',
			price: 2.85,
			description: '1...',
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Dodecahedron2',
			price: 2.95,
			description: '2...',
			canPurchase: true,
			soldOut: false
		}
	];
	})();