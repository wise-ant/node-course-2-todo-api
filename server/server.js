const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose.js');
const { Todo } = require('./models/Todos.js');
const { User } = require('./models/User.js');


const app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  const todo = new Todo({
    text: req.body.text
  });

  todo.save().then( (doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e)
  })
})

app.listen('3000', () => {
  console.log('Listening to port 3000');
})
