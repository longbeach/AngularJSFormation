(function() {
	'use strict';

	var app = angular.module('ors-http', []);
	
	app.config(['$httpProvider', '$provide', function($httpProvider, $provide) {
		console.log('ors-http config ', arguments);
		
		var isNotTemplate = function(url) {
			if (!url) {
				return true;
			}
			return !url.match(/html$/);
		};
		
		
		
		// register the interceptor as a service
		$provide.factory('myHttpInterceptor', ['$injector', function($injector) {
			var $q = $injector.get('$q');
			var $rootScope = $injector.get('$rootScope');
			var $timeout = $injector.get('$timeout');
			$rootScope.showSpinner = false;
			
			var counter = 0;
		
			var startSpinner = function() {
				counter++;
				$timeout(function() {
					if (counter > 0) {
						$rootScope.showSpinner = true;
					}
				}, 500);
				
			};
			var stopSpinner = function() {
				counter--;
				if (counter == 0) {
					$timeout(function() {
						if (counter == 0) {
							$rootScope.showSpinner = false;
						}
					}, 500);
				}
			};
			
			return {
				request: function(config) {
					console.log('config', config);
					if (isNotTemplate(config.url)) {
						startSpinner();
					}
					
					return config;
				},


				// optional method
				response: function(response) {
					console.log('response', response);
					if (isNotTemplate(response.config.url)) {
						stopSpinner();
					}
					
					return response;
				},

				// optional method
				responseError: function(rejection) {
					console.log('rejection', rejection);
					if (isNotTemplate(rejection.config.url)) {
						stopSpinner();
					}
					return $q.reject(rejection);
				}
			};
		}]);

		$httpProvider.interceptors.push('myHttpInterceptor');

	}]);

	

})();
