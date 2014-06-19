var request = require('request');

image_url = 'http://www.clevescene.com/imager/the-lights-of-downtown-cleveland-reflected/b/slideshow/4326741/f5c7/s-1.jpg';

var options = {
	url: 'https://api.imgur.com/3/image',
	headers: {
		'Authorization': 'Client-ID e6c26e0091c2b91'
	}
};

function callback(error, response, body) {
	if (!error && response.statusCode == 200) {
		var info = JSON.parse(body);
		console.log(info);
	}
}

var req = request.post(options, callback).form({'image': image_url});

module.exports = req;
