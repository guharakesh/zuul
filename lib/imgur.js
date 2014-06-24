var request = require('request');
var cheerio = require('cheerio');
var scene = require('./scene.js');

var options = {
	url: 'https://api.imgur.com/3/image',
	headers: {
		'Authorization': 'Client-ID e6c26e0091c2b91'
	},
	pool: false
};

function upload(image_url, callback) {
	request.post(options, function(error, response, body) {
		var imageID = JSON.parse(body).data.id;
		callback(imageID);
	}).form({'image': image_url});
}

var upImages = function(url, callback) {
	var idArray = [];
	var firstURL = url + '1';
	var count = [];
	request({url:url, pool:false}, function(error, response, html) {
		var pushID = function(imageID) {
			idArray.push(imageID);
			if (idArray.length == count) {
				callback(idArray);
			}
		};

		var upAndPush = function(image_url) {
			upload(image_url, pushID);
		};

		var $ = cheerio.load(html);
		count = $('.slideshowCount').text().match(/of [0-9]+/)[0].substr(3);
		var fullURL = [];
		for (var i=1; i<=count; i++) {
			fullURL = url + i;	
			scene.getJPG(fullURL, upAndPush);
		}
	});

};

module.exports = {
	upload: upload,
	upImages: upImages
};
