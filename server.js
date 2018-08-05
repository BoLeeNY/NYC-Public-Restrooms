// Imports all of the middleware
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
// Imports the routes
const parksRouter = require('./routes/parksRouter');

app.use(express.static('public'));
// Initializes ejs
app.set('view engine', 'ejs');

// Sets the port to listen on to 3000
const PORT = process.env.PORT || 3000;
// Initializes the various middleware
app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Sets the URL path to use
app.use('/parks', parksRouter);
// Displays Hello World on the root path
app.get('/', (req, res) => {
  res.json('Hello World');
});
// Opens the port to listen on
app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}.`);
});

module.exports = { app };
