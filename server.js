const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();


const PORT = process.env.PORT || 3000;

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (requestAnimationFrame, res) => {
  res.json('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}.`);
});

module.exports = { app };
