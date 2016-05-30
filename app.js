var express = require('express');
var routes = require('./index');

var app = express();

process.on('uncaughtException', function (mainErr) {
    var msg = "Error at " + new Date() + "\n" + mainErr + "\n-------------------------------------------\n";
    console.log("err>>>>>>" + mainErr + mainErr.stack);
    var fs = require("fs");
    var fd = fs.openSync('./err.txt', 'a')
    fs.writeSync(fd, msg);
    fs.closeSync(fd)
});
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.listen(3007)

//module.exports = app;
