var expect = require("chai").expect;
var imgur = require("../lib/imgur.js");

describe("Imgur", function() {
	describe("#upload()", function() {
		it("should return an imgur link with the uploaded image", function(done) {
			this.timeout(50000);
			var url = 'http://www.clevescene.com/imager/the-lights-of-downtown-cleveland-reflected/b/slideshow/4326741/f5c7/s-1.jpg';
			
			imgur.upload(url,function(results) {
				expect(results).to.match(/^http:\/\/i\.imgur\.com\/[a-zA-Z0-9]{7}\.jpg$/);
				done();
			});
		});
	});	
});
