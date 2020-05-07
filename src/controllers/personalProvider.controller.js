/* eslint-disable no-param-reassign */
const PersonalProviders = require('../models/personalProvider.model');
const userAddedMessage = require('../message-bus/send/user.added');

const PersonalProviderController = {

  findById: (req, res, next) => {
    PersonalProviders.findById(req.payload.id).then((user) => {
      if (!user) { return res.sendStatus(401); }

      return res.json({ user: user.toProfileJSONFor() });
    }).catch(next);
  },

  add: (req, res, next) => {
    const user = {
      firstname: req.body.user.firstname,
      lastname: req.body.user.lastname,
      email: req.body.user.email,
    };
    const promise = PersonalProviders.create(user);

    // eslint-disable-next-line no-shadow
    promise.then((user) => {
      userAddedMessage.send(req.body.user);
      res.json({ user: user.toProfileJSONFor() });
    }).catch(next);
  },

  update: (req, res, next) => {
    const promise = PersonalProviders.findByIdAndUpdate(
      req.body.user.id,
      req.body.user,
    );
    promise.then((user) => {
      res.json({ user });
    }).catch(next);
  },

  delete: (req, res, next) => {
    PersonalProviders.findById(req.payload.id).then((user) => {
      if (!user) { return res.sendStatus(401); }


      return user.remove().then(() => res.sendStatus(204)).catch(next);
    });
  },

};

module.exports = PersonalProviderController;
