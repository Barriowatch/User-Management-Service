/* eslint-disable no-unused-vars */
const personalProviderController = {};

personalProviderController.find = jest.fn(async (ctx) => {
  ctx.status = 200;
  ctx.body = '';
});

personalProviderController.findById = jest.fn(async (ctx) => {
  ctx.status = 200;
  ctx.body = ctx.params.id;
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

personalProviderController.update = jest.fn(async (ctx) => {
  ctx.status = 200;
  ctx.body = ctx.params.id;
});

personalProviderController.delete = jest.fn(async (ctx) => {
  ctx.status = 200;
  ctx.body = ctx.params.id;
});

module.exports = personalProviderController;
