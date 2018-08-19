var express = require('express');
var supertest = require('supertest');

var app = express();

var router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/', router);

app.listen(3000, () => {
  console.log('listening on port 3000');
});

module.exports.app = app;