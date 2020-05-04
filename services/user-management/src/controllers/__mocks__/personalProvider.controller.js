/* eslint-disable no-unused-vars */
const personalProviderController = {};

personalProviderController.findById = jest.fn(async (req, res, _next) => {
  res.status(200).json({
    user: {
      firstname: req.body.user.firstname,
      lastname: req.body.user.lastname,
      email: req.body.user.email,
    },
  });
});

personalProviderController.add = jest.fn(async (req, res, _next) => {
  res.status(200).json({
    user: {
      firstname: req.body.user.firstname,
      lastname: req.body.user.lastname,
      email: req.body.user.email,
    },
  });
});

personalProviderController.update = jest.fn(async (req, res, _next) => {
  res.status(200).json({
    user: {
      firstname: req.body.user.firstname,
      lastname: req.body.user.lastname,
      email: req.body.user.email,
    },
  });
});

personalProviderController.delete = jest.fn(async (req, res, _next) => {
  res.status(200).json({
    user: {
      firstname: req.body.user.firstname,
      lastname: req.body.user.lastname,
      email: req.body.user.email,
    },
  });
});

module.exports = personalProviderController;
