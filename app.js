var async = require('async');
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var consoles = require('./routes/console');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/console', consoles);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;

/*
var Watcher = require('watch-fs').Watcher;
var watcher = new Watcher({
    paths: path.join(__dirname,'/data/import'),
    filters: {
        includeFile: function(name) {
            return /\.txt/.test(name);
        }
    }
});

watcher.on('create', function(name) {
    console.log('file ' + name + ' created');
    //Import to database

});

watcher.on('change', function(name) {
    console.log('file ' + name + ' changed');
});

watcher.on('delete', function(name) {
    console.log('file ' + name + ' deleted');
});

watcher.start(function(err, failed) {
    console.log('watcher started');
    console.log('files not found', failed);
});
*/
