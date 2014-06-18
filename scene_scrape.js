// var request = require('request');
var cheerio = require('cheerio');
var FormData = require('form-data');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var querystring = require('querystring');
var http = require('http');
var request = require('ahr2');

// url = 'http://www.clevescene.com/cleveland/15-awesome-images-of-the-cleveland-skyline/Slideshow?oid=4326740&slide=1';

function form_upload(url) {

}

function cleve_url(url, callback) {
	request(url, function(error, response, html) {
		if (!error) {
			var $ = cheerio.load(html)
			
			var image_url

			image_url = "http://www.clevescene.com" + $('.slideImg').find('img').first()[0].attribs.src;
			console.log(image_url);
			callback(image_url);
		}
	});
}

function imgur_post(image_url) {
	var options = {
		url: 'https://api.imgur.com/3/image',
		headers: {
			'Authorization': 'Client-ID e6c26e0091c2b91'
		},
		method: 'POST',
		image: image_url
	}
	request(options, function(error, response, body) {
	 console.log(error);
	 console.log(response);
	});
}

function upload(file, callback) {
	var fd = new FormData();

	fd.append('image', file);

	var options = {
		headers: {
			'Authorization': 'Client-ID e6c26e0091c2b91'
		}
	}

	request.post('https://api.imgur.com/3/image', {}, fd, options).when(function(err, response, data) {
		console.log(err);
		console.log(data);
	});
	var xhr = new XMLHttpRequest();

	xhr.open("POST", "https://api.imgur.com/3/upload.json");

	xhr.onload = function() {
		console.log(xhr.responseText);
	}
	xhr.setRequestHeader('Authorization', 'Client-ID e6c26e0091c2b91');

	// xhr.send(fd.serialize);
}



url = 'http://www.clevescene.com/imager/the-lights-of-downtown-cleveland-reflected/b/slideshow/4326741/f5c7/s-1.jpg';
upload(url, function(response) {
	console.log(response);
});

module.exports = cleve_url;
module.exports = imgur_post;
