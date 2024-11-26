const path = require('path');
const ejs = require('ejs');
const fs = require('fs');

module.exports = (req, res) => {
  // Read the EJS template from the views folder
  const filePath = path.resolve('views', 'index.ejs');

  // Dynamic data
  const dynamicData = {
    title: "Geo Caching",
    description: "Welcome to the world of Geo Caching (purely online) <br/> For all the lovers of Riddles, Map searching and much more",
    howToPlay: "Riddles and Questions will appear on this side and you need to click on the right place on the map",
    victoryPrize: "Well ... Knowledge ...",
    startText: "Lets start strong select in the map the coolest country (I am portuguese)"
  };

  // Read the EJS file and render it
  ejs.renderFile(filePath, dynamicData, {}, (err, html) => {
    if (err) {
      res.status(500).send('Error rendering the page.');
      return;
    }
    res.send(html);
  });
};
