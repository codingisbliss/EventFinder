const express        = require('express');
const bodyParser     = require('body-parser');
var parseurl         = require('parseurl')
const app            = express();
//inintate Database function
const dbClass        = require('./config/db')
const session        = require('express-session');
const port           = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
//configure session parameters
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
//initliaze database Object 
var dbObj = new dbClass()
require('./app/routes')(app,dbObj);
dbObj.connect()
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });



