
/**
 * Module dependencies.
 */

var express = require('express')
  , track = require('./routes/track')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/issue', track.getIssues);
app.get('/issue/:id', track.getIssueById);
app.put('/issue', track.saveIssue);
app.post('/issue/:id', track.updateIssue);

app.get('/issue/:id/comments', track.getCommentsById);
app.put('/issue/:id/comment', track.saveComment);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
