'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CMS_USERDATA_CUSTOMER_SCHEMA = new Schema({
  NAME: {
    type: String
  },
  SURNAME: {
    type: String
  },
  ADDR: {
    type: String
  },
  TEL: {
    type: String
  },
  CREATE_DATE: {
    type: Date,
    default: Date.now
  },
  CREATE_BY: {
    type: String
  },
  CHANGE_DATE: {
    type: Date,
    default: Date.now
  },
  CHANGE_BY: {
    type: String
  }
});

module.exports = mongoose.model('CMS_USERDATA_CUSTOMER', CMS_USERDATA_CUSTOMER_SCHEMA);
