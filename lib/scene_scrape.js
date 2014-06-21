var request = require('request');
var cheerio = require('cheerio');

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

url = 'http://www.clevescene.com/imager/the-lights-of-downtown-cleveland-reflected/b/slideshow/4326741/f5c7/s-1.jpg';

module.exports = cleve_url;
