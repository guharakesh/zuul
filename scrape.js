var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var app = express();

app.get('/scrape', function(req, res) {
	
	url = 'http://www.clevescene.com/imager/the-lights-of-downtown-cleveland-reflected/b/slideshow/4326741/f5c7/s-1.jpg';

	request(url, function(error, response, html) {
		if (!error) {
			var $ = cheerio.load(html);

		}
	});

});


url = 'http://www.clevescene.com/cleveland/15-awesome-images-of-the-cleveland-skyline/Slideshow?oid=4326740&slide=1';


