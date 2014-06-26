(function() {
	var app = angular.module('store', []);
	
	app.controller('StoreController', function(){
		this.product = gem;
		});
		
		var gem = {
			name: 'Dodecahedron1',
			price: 2.85,
			description: '1...',
		}
	})();