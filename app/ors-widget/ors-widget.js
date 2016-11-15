(function() {
	'use strict';

	var app = angular.module('ors-widget', []);
	
	app.directive('orsStar', ['$compile', function($compile) {
		return {
			restrict: 'E',
			scope: {
				n: '=note'
			},
			link: function(scope, element, attrs) {
				console.log('orsStar link', arguments);
				
				scope.update = function(n) {
					console.log('update', arguments);
					scope.n = n;
				};
				
				scope.$watch('n', function() {
					console.log('orsStar link $watch', arguments);
					var html = '';
					var note = Number(scope.n);
					note = (isNaN(note)) ? 4 : note;
					note = (note > 5) ? 5 : note;
					note = (note < 0) ? 0 : note;
					for (var i = 0; i < note; i++) {
						html += '<img ng-click="update(' + (i) + ')" src="ors-widget/img/yellow_star.png" />';
					}
					for (var i = note; i < 5; i++) {
						html += '<img ng-click="update(' + (i + 1) + ')" src="ors-widget/img/white_star.png" />';
					}
					
					element.html(html);
					$compile(element.contents())(scope);
				});	
			}
		};
	}]);

	

})();
