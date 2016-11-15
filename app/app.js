(function() {
	'use strict';

	var app = angular.module('mainApp', ['ors-widget', 'ngRoute']);
	
	app.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'tmpl/route/home.html'
			})
			.when('/products', {
				templateUrl: 'tmpl/route/products.html'
			})
			.when('/services', {
				templateUrl: 'tmpl/route/services.html'
			})
			.when('/contact', {
				templateUrl: 'tmpl/route/contact.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
	
	app.run(['$rootScope', function($rootScope) {
		$rootScope.myNote = 1;
	}]);
	
	app.directive('orsLayout', function() {
		return {
			restrict: 'E',
			controller: function() {
				this.coucou = 23;
			}
		};
	});

	app.directive('orsHeader', function() {
		return {
			require: '^^orsLayout',
			restrict: 'E',
			templateUrl: 'tmpl/ors-header.html',
			controller: function($scope) {
				this.truc = 'qsdf';
			},
			controllerAs: 'headerCtrl',
			scope: true,
			link: function() {
				console.log('orsHeader link', arguments);
			}
		};
	});
	
	app.directive('orsBody', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-body.html'
		};
	});
	
	app.directive('orsFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-footer.html'
		};
	});

})();
