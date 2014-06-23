var expect = require("chai").expect;
var scene = require("../lib/scene.js");

describe("Scene", function() {
	describe("getJPG()", function() {
		it("should return a url to the jpg on the page", function(done) {
			var url = 'http://www.clevescene.com/cleveland/10-greater-cleveland-all-day-breakfast-joints-you-should-try/Slideshow?oid=4317427&slide=1';

			scene.getJPG(url, function(results) {
				expect(results).to.match(/^http:\/\/www\.clevescene\.com\/imager\/[a-zA-Z0-9\-]+\/b\/slideshow\/[0-9]{7}\/[a-zA-Z0-9]{4}\/[a-zA-Z0-9\-]+\.jpg$/);
				done();
			});
		});
	});

	describe("slideURLs", function() {
		it("should return a base url w/o slide #, and # of slides", function(done) {
			this.timeout(50000);
			var url = ['http://www.clevescene.com/scene-and-heard/archives/2014/05/30/10-greater-cleveland-all-day-breakfast-joints-you-should-try', 'http://www.clevescene.com/cleveland/12-cleveland-patios-you-have-to-hit-this-summer/Slideshow?oid=4328959'];
			var testFunction = function(base_url, count) {
				expect(base_url).to.match(/^http:\/\/www.clevescene\.com\/cleveland\/[a-zA-Z0-9\-]+\/Slideshow\?oid=[0-9]{7}&slide=$/);
				expect(count).to.be.a('number');
			};
			for (var i=0; i<url.length; i++) {
				scene.baseURL(url[i], testFunction);
			}
			done();
		});
	});
});
