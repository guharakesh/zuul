var expect = require("chai").expect;
var imgur = require("../lib/imgur.js");

describe("Imgur", function() {
	describe("#upload()", function() {
		it("should return an imgur link with the uploaded image", function(done) {
			this.timeout(50000);
			var url = 'http://www.clevescene.com/imager/the-lights-of-downtown-cleveland-reflected/b/slideshow/4326741/f5c7/s-1.jpg';
			
			imgur.upload(url,function(results) {
				expect(results).to.match(/^[a-zA-Z0-9]{7}$/);
				done();
			});
		});
	});	

	describe("#upImages()", function() {
		it("should return an array of uploaded image ids", function(done) {
			this.timeout(200000);
			var url = 'http://www.clevescene.com/cleveland/12-cleveland-patios-you-have-to-hit-this-summer/Slideshow?oid=4328959&slide=';
			imgur.upImages(url, function(results){
				expect(results).to.be.instanceOf(Array);
				expect(results).to.not.be.empty;
				for (var i=0; i<results.length; i++) {
					expect(results[i]).to.match(/^[a-zA-Z0-9]{7}$/);
				}
				done();	
			});
		});
	});
});
