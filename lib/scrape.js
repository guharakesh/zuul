var imgur = require("../lib/imgur.js");
var scene= require("../lib/scene.js");

function scrape(url, callback) {
	scene.baseURL(url, function(url, albumTitle, albumDes){
		imgur.upImages(url, albumTitle, albumDes, function(link){
			callback(link);
		});
	});
}

url = process.argv[2];

scrape(url, function(link){
	console.log(link);
});

module.exports = {
	scrape: scrape
};
