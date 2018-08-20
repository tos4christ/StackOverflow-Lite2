import express from 'express';
import bodyParser from 'body-parser';


let app = express();

app.use(bodyParser.json());

let router = express.Router();

let question1 = {id: 1, text: 'tosin is doing 48 hours shift duty', answers:[{text: 'this is very true', vote: 2, id: 1},{text: 'are you sure?', id: 2, vote: 3}]};

let question2 = {id: 2, text: 'tosin is doing 48 hours shift duty', answers:[{text: 'this is very true', vote: 2, id: 1},{text: 'are you sure?', id: 2, vote: 3}]};

let question3 = {id: 3, text: 'tosin is doing 48 hours shift duty', answers:[{text: 'this is very true', vote: 2, id: 1},{text: 'are you sure?', id: 2, vote: 3}]};

let questionArray = [question1,question2,question3];

// GET SPECIFIC QUESTION DOCUMENT WHEN QUESTION ID IS AVAILABLE
router.param('qID', (req, res, next, id) => {
      const doc = questionArray.find(c => c.id === parseInt(req.params.qID));
      req.question = doc;
  if(!req.question) {
        const err = new Error('Not Found');
        return next(err.message);
      }
      return next();
});


//GET ALL QUESTIONS
router.get('/', (req, res) => {
        res.json(questionArray);
  });
//GET SPECIFIC QUESTION ID
router.get('/:qID', (req, res) => {
        res.json(req.question);
});

router.post('/', (req, res, next) => {
  const length = questionArray.length + 1;
  let questioner = {};
  questioner.id = length;
  questioner.text = req.body.text;
  questionArray.push(questioner);
  res.json(questioner);
});

router.post('/:qID/answers', (req, res, next) => {
  const doc = req.question;
  const id = req.question.answers.length + 1;
  const text = req.question.text;
  doc.answers.push({text, id});
});

//GET SPECIFIC ANSWER DOCUMENT WHEN ANSWER ID IS AVAILABLE
router.get('/:qID/answers/:aID', (req, res, next) => {
  const docs = questionArray.find(c => c.id === parseInt(req.params.qID));
  const answer = docs.answers[parseInt(req.params.aID) -1];
  res.json(answer);
});

app.use('/questions', router);

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

export { app };
