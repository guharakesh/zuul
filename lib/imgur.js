exports = module.exports = {};

var request = require('request');

var options = {
	url: 'https://api.imgur.com/3/image',
	headers: {
		'Authorization': 'Client-ID e6c26e0091c2b91'
	}
};

exports.upload = function(image_url, callback) {
	request.post(options, function(error, response, body) {
		var link = JSON.parse(body).data.link;
		callback(link);
	}).form({'image': image_url});
};
