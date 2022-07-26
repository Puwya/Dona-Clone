
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create our express app
const app = express();

// Handle CORS + Middleware
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'auth-token, Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const uri = 'mongodb+srv://root:Wastedyouth1@mevn-example-cluster.md3oh.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Mongodb Connected');
}).catch(err => console.log(err));

app.use(bodyParser.json());

// Routes
app.get('/', (res, req) => {
  res.send('Home Page');
});

const TodosRoute = require('./routes/Todos');
app.use('/todos', TodosRoute);

// Start Server
app.listen(3000, () => {
  console.log('Listening at port 3000');
});