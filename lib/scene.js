var request = require('request');
var cheerio = require('cheerio');

var getJPG = function(url, callback) {
	request(url, function(error, response, html) {
		if (!error) {
			var $ = cheerio.load(html);

			var image_url= 'http://www.clevescene.com' + $('.slideImg').find('img').first()[0].attribs.src;
			callback(image_url);
		}
	});
};

var baseURL = function(url, callback) {
	var choppedURL = url.split('/');
	var type = choppedURL[3];
	var title = [];	
	var oid = [];

	var buildURL = function(oid, title) {
		return 'http://www.clevescene.com/cleveland/' + title + '/Slideshow?oid=' + oid + '&slide=';
	};

	request(url, function(error, response, html) {
		var $ = cheerio.load(html);
		if (type == 'scene-and-heard') {
			oid = $('.slideshowThumbnails').find('a').first()[0].attribs.href;
			oid = oid.match(/oid=[0-9]{7}/)[0];
			oid = oid.substr(4,7);

			title = choppedURL[choppedURL.length-1];

			callback(buildURL(oid, title));
		} else if (type == 'cleveland') {
				baseURL($('.storyItem').find('a').first()[0].attribs.href);
		}
	});
};

module.exports = {
	getJPG: getJPG,
	baseURL: baseURL
};
