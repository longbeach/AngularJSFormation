(function() {
	'use strict';

	var clone = function(o) {
		var result = {};
		
		for (var p in o) {
			if (o[p] !== null && typeof o[p] === 'object') {
				result[p] = clone(o[p]);
			} else {
				result[p] = o[p];
			} 
		}
		return result;
	};
	
	var a = {
		x: {
			y: 4
		}
	};
	
	var b = clone(a);
	
	console.log('a.x.y', a.x.y);
	console.log('b.x.y', b.x.y);
	
	b.x.y = 6;
	
	console.log('a.x.y', a.x.y);
	console.log('b.x.y', b.x.y);
})();
