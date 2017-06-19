const express = require('express');
const app = express();
const loremIpsum = require('lorem-ipsum');
let number;



app.get('/lorem/:paragraphCount', function (req, res) {

  let output = loremIpsum ({
      count: req.params.paragraphCount
    , units: 'paragraphs'
    , sentenceLowerBound: 5         // Minimum words per sentence.
    , sentenceUpperBound: 15        // Maximum words per sentence.
    , paragraphLowerBound: 3        // Minimum sentences per paragraph.
    , paragraphUpperBound: 7        // Maximum sentences per paragraph.
    , format: 'html'
    , random: Math.random
  });
  res.send(output);
});

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
