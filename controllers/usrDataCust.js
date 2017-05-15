var mongoose = require('mongoose'),
var usrDataCust = mongoose.model('CMS_USERDATA_CUSTOMER');

exports.readAll = function(req, res) {
  usrDataCust.find({}, function(err, data) {
    if (err) res.send(err);
    res.json(data);
  });
};

exports.createOne = function(req, res) {
  var new_usrDataCust = new usrDataCust(req.body);
  usrDataCust.save(function(err, data) {
    if (err) res.send(err);
    res.json(data);
  });
};

exports.readOne = function(req, res) {
  usrDataCust.findById(req.params.Id, function(err, data) {
    if (err) res.send(err);
    res.json(data);
  });
};

exports.updateOne = function(req, res) {
  usrDataCust.findOneAndUpdate(req.params.Id, req.body, {new: true}, function(err, data) {
    if (err) res.send(err);
    res.json(data);
  });
};

exports.deleteOne = function(req, res) {
  usrDataCust.remove({
    _id: req.params.Id
  }, function(err, data) {
    if (err) res.send(err);
    res.json({ message: 'Comm_Adjust successfully deleted' });
  });
};
