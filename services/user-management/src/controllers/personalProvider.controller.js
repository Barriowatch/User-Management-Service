const PersonalProviders = require('../models/personalProvider.model');
const userAddedMessage = require('../message-bus/send/user.added');

const PersonalProviderController = {

  find: async (ctx) => {
    ctx.body = await PersonalProviders.find();
  },
  findById: async (ctx) => {
    try {
      const result = await PersonalProviders.findById(ctx.params.id);
      if (!result) {
        ctx.throw(404, 'User Not Found');
      }
      ctx.body = result;
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404);
      } else {
        ctx.throw(500);
      }
    }
  },

  add: async (ctx) => {
    try {
      const user = new PersonalProviders();
      user.firstname = ctx.request.body.firstname;
      user.lastname = ctx.request.body.lastname;
      user.email = ctx.request.body.email;
      user.password = ctx.request.body.password;

      const status = await user.save();
      ctx.body = status;
      userAddedMessage.send(ctx.request.body);
    } catch (err) {
      ctx.throw(422, err);
    }
  },

  update: async (ctx) => {
    try {
      const result = await PersonalProviders.findByIdAndUpdate(
        ctx.params.id,
        ctx.request.body,
      );
      if (!result) {
        ctx.throw(404);
      }
      ctx.body = result;
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404);
      } else {
        ctx.throw(500);
      }
    }
  },

  delete: async (ctx) => {
    try {
      const result = await PersonalProviders.findByIdAndRemove(ctx.params.id);
      if (!result) {
        ctx.throw(404);
      }
      ctx.body = result;
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404);
      } else {
        ctx.throw(500);
      }
    }
  },

};

module.exports = PersonalProviderController;
