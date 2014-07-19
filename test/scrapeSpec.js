var expect = require("chai").expect;
var imgur = require("../lib/imgur.js");
var scene = require("../lib/scene.js");
var scrape = require("../lib/scrape.js");

describe("Scrape", function() {
	describe('.scrape()', function() {
		it('should return an album link', function(done) {
			this.timeout(900000);
			var url = ['http://www.clevescene.com/scene-and-heard/archives/2014/05/30/10-greater-cleveland-all-day-breakfast-joints-you-should-try', 'http://www.clevescene.com/cleveland/12-cleveland-patios-you-have-to-hit-this-summer/Slideshow?oid=4328959'];
			for (var i=1; i<url.length; i++) {
				scrape.scrape(url[i], function(result){
					expect(results).to.match(/http:\/\/imgur\.com\/a\/[a-zA-Z0-9]{5}/);
					done();
				});
			}
		});
	});
});
