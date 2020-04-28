const personalProviderController = {};

personalProviderController.find = jest.fn(async (ctx) => {
  ctx.status = 200;
  ctx.body = '';
});

personalProviderController.findById = jest.fn(async (ctx) => {
  ctx.status = 200;
  ctx.body = ctx.params.id;
});

personalProviderController.add = jest.fn(async (ctx) => {
  ctx.status = 200;
  ctx.body = '';
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
