var mongojs = require('mongojs');

var db = mongojs('xke', ['tracks', 'comments', 'sequence'])

exports.getIssues = function (req, res) {
    db.tracks.find({}, {date: 1, reporter: 1, product: 1, version: 1, summary: 1, status: 1}, function (err, docs) {
        res.send(docs);
    });
};

exports.getIssueById = function (req, res) {
    var ObjectId = mongojs.ObjectId;
    db.tracks.findOne({_id: ObjectId(req.params.id)}, function (err, doc) {
        res.send(doc);
    });
};

exports.saveIssue = function (req, res) {
    console.log('save issue');
    db.tracks.save(req.body, function (err, doc) {
        res.send(201, doc);
    });
};

exports.updateIssue = function (req, res) {
    var body = req.body;
    // db.tracks.findAndModify
    res.send("respond with a resource");
};

exports.getCommentsById = function (req, res) {
    db.comments.find({ 'track.$id' : req.params.id}, function (err, docs) {
        res.send(docs);
    });
};

exports.saveComment = function (req, res) {
    var body = req.body;
    body.track = {'$ref': 'tracks', '$id' : req.params.id};
    db.comments.save(req.body, function (err, doc) {
        res.send(201, doc);
    });
};
