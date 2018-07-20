// scrape script
// =============

// Require axios and cheerio, making our scrapes possible
var axios = require("axios");
var cheerio = require("cheerio");

// This function will scrape the NYTimes website
var scrape = function() {

 

  return axios.get("https://www.huffingtonpost.com/section/arts").then(function(res) {

      var $ = cheerio.load(res.data);
      var articles = [];

      $("div.card__content").each(function(i, element) {

          var result = {};

          // Add the text and href of every link, and save them as properties of the result object
          result.imgSrc = $(this).find(' a > div > img').attr("src");
          result.link = $(this).find(' div > div > a').attr("href");
          result.title = $(this).find(' div > div > a > div').text();
          result.byLine = $(this).find(' div > div > div >').next().text();
          
          
            articles.push(result);
        
      });
     
      console.log(articles); 
      
      return(articles);
  });

};

module.exports = scrape;