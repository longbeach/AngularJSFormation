(function() {
	'use strict';

	var app = angular.module('mainApp', []);

	app.directive('orsHeader', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors_header.html'
		};
	});
	
	app.directive('orsBody', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors_body.html'
		};
	});
	
	app.directive('orsFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors_footer.html'
		};
	});
	
})();
