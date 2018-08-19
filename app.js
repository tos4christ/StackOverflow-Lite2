const express = require('express');
const routes = require('./routes.js');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

app.use('/questions', routes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status(404);
  next(err);
});

app.use((err, req, res,next) => {
   
  res.json(err);
  
});


app.listen(3000, () => {
  console.log('listening on port 3000');
});

module.exports.app = app;