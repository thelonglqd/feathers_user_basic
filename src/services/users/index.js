const service = require('feathers-mongoose');

const UserModel = require('./users-model');

const hooks = require('./hooks');

module.exports = function () {
  const app = this;

  const options = {
    Model: UserModel,
    paginate: {
      default: 5,
      max: 25,
    },
  };

  // Initialize our service with any options it requires
  app.use('/users', service(options));
};