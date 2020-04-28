// Import the required npm packages
const Koa = require('koa');
const Logger = require('koa-logger');
const Helmet = require('koa-helmet');
const BodyParser = require('koa-bodyparser');

// Get the API routes  files
const routes = require('./routes/routes');

// Init Koa API App
const app = new Koa();
app.use(Logger());
app.use(BodyParser());
app.use(Helmet());

// Setup the API routes
app.use(routes());

module.exports = app;
