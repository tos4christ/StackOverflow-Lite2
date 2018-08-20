import request from 'supertest';

import app from '../app.js';

let question1 = {id: 1, text: 'tosin is doing 48 hours shift duty', answers:[{text: 'this is very true', vote: 2, id: 1},{text: 'are you sure?', id: 2, vote: 3}]};

let question2 = {id: 2, text: 'tosin is doing 48 hours shift duty', answers:[{text: 'this is very true', vote: 2, id: 1},{text: 'are you sure?', id: 2, vote: 3}]};

let question3 = {id: 3, text: 'tosin is doing 48 hours shift duty', answers:[{text: 'this is very true', vote: 2, id: 1},{text: 'are you sure?', id: 2, vote: 3}]};

let questionArray = [question1,question2,question3];

it('Test for the get all question Array', (done) => {
  request(app)
    .set('Accept', 'application/json')
     .get('/questions')
    .expect(questionArray)
    .end(done);
});

it('Test for the get specific question with id 1', (done) => {
  request(app).get('/questions/1').expect(questionArray[0]).end(done);
});

it('Test for the get specific question with id 2', (done) => {
  request(app).get('/questions/2').expect(questionArray[1]).end(done);
});

it('Test for the get specific question with id 3', (done) => {
  request(app).get('/questions/3').expect(questionArray[2]).end(done);
});
  
