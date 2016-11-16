(function() {
	'use strict';

	var app = angular.module('ors-ajax', []);
	
	app.run(['$injector', function($injector) {
		
		var $rootScope = $injector.get('$rootScope');
		var $http = $injector.get('$http');
		var $q = $injector.get('$q');
		
		$rootScope.start = function() {
			console.log('start', arguments);
				
			$q.when('start')
				.then(function() {
					
					var config = {
						url: '/ws/s1',
						method: 'GET'
					};
					return $http(config);
				})
				.then(function(response) {
					console.log('success 1', arguments);
					
					return $q.all([$http.get('/ws/s2'), $http.get('/ws/s3'), $http.get('/ws/s4')]);
				})
				.then(function(response) {
					console.log('success 2 3 4', arguments);
					//return $q.reject('ouh ca me plait pas');
					return $http.get('/ws/s5');
				})
				.then(function(response) {
					console.log('success 5', arguments);
				})
				.finally(function(response) {
					$rootScope.showSpinner = false;
				})
				.catch(function(error) {
					console.error('error', error);
				})
				
		};
	}]);

	

})();
