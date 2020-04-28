const combineRouters = require('koa-combine-routers');

const userRouter = require('./user.routes');
const providerRouter = require('./personalProvider.routes');

userRouter.allowedMethods({ throw: true });
providerRouter.allowedMethods({ throw: true });

const router = combineRouters(
  userRouter,
  providerRouter,
);

module.exports = router;
