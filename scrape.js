var scene_scrape = require('./scene_scrape');

url = 'http://www.clevescene.com/cleveland/15-awesome-images-of-the-cleveland-skyline/Slideshow?oid=4326740&slide=1';

console.log(scene_scrape.imgur_post(scene_scrape.cleve_url(url)));
