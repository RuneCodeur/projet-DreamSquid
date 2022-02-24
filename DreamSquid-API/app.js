const express = require('express');
const xss = require('xss-clean')
const bodyParser = require('body-parser');
const rateLimit = require("express-rate-limit");
const helmet = require('helmet');
const path = require('path');
const connection = require('./connect');

const userRoutes = require('./routes/user');
const calculRoutes = require('./routes/calculator');
const pictureRoutes = require('./routes/picture');

const limiter = rateLimit({
  windowMs: 60 * 1000, 
  max: 100
});

//connection
connection.query("select CURTIME();",
function(err, result) {
  if(result){
  console.log('- - - il est '+result[0]['CURTIME()']+ ', et vous êtes connecté à la base de données MySQL ! - - -');
  }
  if(err){
  console.log('Impossible de se connecter, erreur suivante : ', err);
  }
});

//headers
const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, cross-origin-resource-policy, pseudo, iddescription, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  next();
}); 

app.use(bodyParser.json());
app.use(limiter);
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(xss());

app.use('/images', express.static(path.join(__dirname, 'images')));

//routes
app.use('/auth', userRoutes);
app.use('/calculator', calculRoutes);
app.use('/picture', pictureRoutes);

module.exports = app;

