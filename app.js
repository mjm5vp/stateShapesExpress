var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var michiganSlides = require('./routes/michigan/michiganSlides');
var maineSlides = require('./routes/maine/maineSlides');
var kentuckySlides = require('./routes/kentucky/kentuckySlides');
var minnesotaSlides = require('./routes/minnesota/minnesotaSlides');
var masonDixonSlides = require('./routes/masonDixon/masonDixonSlides');
var dcSlides = require('./routes/dc/dcSlides');
var georgiaSlides = require('./routes/georgia/georgiaSlides');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/michiganSlides', michiganSlides);
app.use('/maineSlides', maineSlides);
app.use('/kentuckySlides', kentuckySlides);
app.use('/minnesotaSlides', minnesotaSlides);
app.use('/masonDixonSlides', masonDixonSlides);
app.use('/dcSlides', dcSlides);
app.use('/georgiaSlides', georgiaSlides);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
