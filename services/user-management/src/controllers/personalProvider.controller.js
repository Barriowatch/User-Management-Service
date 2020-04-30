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
    const user = new PersonalProviders();
    user.firstname = req.body.user.firstname;
    user.lastname = req.body.user.lastname;
    user.email = req.body.user.email;

    user.save().then(() => {
      userAddedMessage.send(req.body.user);
      res.json({ user: user.toProfileJSONFor });
    }).catch(next);
  },

  update: (req, res, next) => {
    PersonalProviders.findById(req.payload.id).then((user) => {
      if (!user) { return res.sendStatus(401); }

      // only update fields that were actually passed...
      if (typeof req.body.user.lastname !== 'undefined') {
        PersonalProviders.lastname = req.body.user.lastname;
      }
      if (typeof req.body.user.firstname !== 'undefined') {
        PersonalProviders.firstname = req.body.user.firstname;
      }
      if (typeof req.body.user.email !== 'undefined') {
        PersonalProviders.email = req.body.user.email;
      }
      if (typeof req.body.user.phone !== 'undefined') {
        PersonalProviders.phone = req.body.user.phone;
      }
      if (typeof req.body.user.status !== 'undefined') {
        PersonalProviders.status = req.body.user.status;
      }
      if (typeof req.body.user.profile_picture !== 'undefined') {
        PersonalProviders.profile_picture = req.body.user.profile_picture;
      }
      if (typeof req.body.user.birth_date !== 'undefined') {
        PersonalProviders.birth_date = req.body.user.birth_date;
      }
      if (typeof req.body.user.gender !== 'undefined') {
        PersonalProviders.gender = req.body.user.gender;
      }
      if (typeof req.body.user.barrio_id !== 'undefined') {
        PersonalProviders.barrio_id = req.body.user.barrio_id;
      }
      if (typeof req.body.user.location !== 'undefined') {
        PersonalProviders.location = req.body.user.location;
      }
      if (typeof req.body.user.password !== 'undefined') {
        PersonalProviders.setPassword(req.body.user.password);
      }

      return user.save().then(() => res.json({ user }));
    }).catch(next);
  },

  delete: (req, res, next) => {
    PersonalProviders.findById(req.payload.id).then((user) => {
      if (!user) { return res.sendStatus(401); }


      return req.user.remove().then(() => res.sendStatus(204)).catch(next);
    });
  },

};

module.exports = PersonalProviderController;
