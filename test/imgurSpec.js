var expect = require("chai").expect;
var imgur = require("../lib/imgur.js");

describe("Imgur", function() {
	describe(".upload()", function() {
		it("should return an imgur link with the uploaded image", function(done) {
			this.timeout(50000);
			var url = 'http://www.clevescene.com/imager/the-lights-of-downtown-cleveland-reflected/b/slideshow/4326741/f5c7/s-1.jpg';
			var hash = 'OncHLlgk2uf4qRL';
			imgur.upload(url,hash,function(results) {
				expect(results).to.match(/^[a-zA-Z0-9]{7}$/);
				done();
			});
		});
	});	

	describe(".upImages()", function() {
		it("should return an album link with uploaded images", function(done) {
			this.timeout(60000);
			var url = 'http://www.clevescene.com/cleveland/12-cleveland-patios-you-have-to-hit-this-summer/Slideshow?oid=4328959&slide=';
			var albumTitle = '12 Cleveland Patios You Have to Hit Up This Summer';
			var albumDes = 'Just when you thought Cleveland...';
			imgur.upImages(url, albumTitle, albumDes, function(results){
				expect(results).to.match(/http:\/\/imgur\.com\/a\/[a-zA-Z0-9]{5}/);
				done();	
			});
		});
	});

	describe(".createAlbum()", function() {
		it("should return an album delete hash and link", function(done) {
			this.timeout(50000);
			var albumTitle = '12 Cleveland Patios You Have to Hit Up This Summer';
			var albumDes = 'Just when you thought Cleveland...';

			imgur.createAlbum(albumTitle, albumDes, function(hash, link) {
				expect(hash).to.match(/^[a-zA-Z0-9]{15}$/);
				expect(link).to.match(/http:\/\/imgur\.com\/a\/[a-zA-Z0-9]{5}/);
				done();
			});
		});
	});
});
