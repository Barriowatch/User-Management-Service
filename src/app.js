/* eslint-disable no-unused-vars */
// // Import the required npm packages
// const Koa = require('koa');
// const Logger = require('koa-logger');
// const Helmet = require('koa-helmet');
// const BodyParser = require('koa-bodyparser');

// // Get the API routes  files
// const routes = require('./routes/routes');

// // Init Koa API App
// const app = new Koa();
// app.use(Logger());
// app.use(BodyParser());
// app.use(Helmet());

// // Setup the API routes
// app.use(routes());


const http = require('http');
const path = require('path');
const methods = require('methods');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const errorhandler = require('errorhandler');


const isProduction = process.env.NODE_ENV === 'production';
const routerPath = path.join(__dirname, '/public');
// Create global app object

const app = express();

app.use(cors());

// Normal express config defaults
app.use(require('morgan')('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('method-override')());

app.use(express.static(routerPath));


app.use(session({
  secret: 'conduit', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false,
}));

if (!isProduction) {
  app.use(errorhandler());
}
require('./models/personalProvider.model');
app.use(require('./routes'));

// catch 404 and forward to error handler]
app.use((_req, _res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use((err, _req, res, _next) => {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

module.exports = app;
