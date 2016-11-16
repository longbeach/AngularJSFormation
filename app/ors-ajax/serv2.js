(function() {
	'use strict';
//server modif timeout
	var express = require('express'); // charge ExpressJS
	var serveIndex = require('serve-index');

	var app = express();
	
	var middleware = function(req, res, next) {
		console.log('req.url', req.url);
		var json = require('.' + req.url + '.json');
		setTimeout(function() {
			
			if (json.result !== 'ok') {
				res.status(400);
			}
			res.json(json);
		}, 1000 * json.delay);
	};
	
	app.all(['/ws/s1', '/ws/s2', '/ws/s3', '/ws/s4', '/ws/s5'], middleware);
	
	app.use(express.static('.'));
	app.use(serveIndex('.', {icons: true}));
	
	app.use(function(req, res, next) {
		console.log('404: Page not Found', req.url);
		next();
	});

	app.listen(8000, function() {
		console.log('server started on port 8000');
	});
})();
