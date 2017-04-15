const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

