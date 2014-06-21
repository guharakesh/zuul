exports = module.exports = {};

var request = require('request');

var options = {
	url: 'https://api.imgur.com/3/image',
	headers: {
		'Authorization': 'Client-ID e6c26e0091c2b91'
	}
};

function callback(error, response, body) {
	if (!error && response.statusCode == 200) {
		var info = JSON.parse(body);
		return info;
	}
}

// request.post(options, callback).form({'image': image_url});

exports.upload = function(image_url, callback) {
	request.post(options, function(error, response, body) {
		var info = JSON.parse(body);
		callback(info);
	}).form({'image': image_url});
};
