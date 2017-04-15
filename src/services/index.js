'use strict';
const mongoose = require('mongoose');
const nconf = require('nconf');

const userService = require('./users');

module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  nconf.argv().env();
  // mongoose.connect(app.get('mongodb'));
  mongoose.connect(nconf.get('MONGO_URL'));
  // http://mongoosejs.com/docs/promises.html
  mongoose.Promise = global.Promise;

  app.configure(userService);
};
