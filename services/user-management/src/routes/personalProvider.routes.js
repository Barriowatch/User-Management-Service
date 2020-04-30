const KoaRouter = require('koa-router');
const config = require('../environment/config');
const providersController = require('../controllers/personalProvider.controller');
const jwt = require('../middlewares/jwt');

const api = 'providers';

const router = new KoaRouter();

router.prefix(`/${config.baseAPIRoute}/${api}`);

// GET /api/providers
router.get('/', providersController.find);

// POST /api/providers
router.post('/', providersController.add);

// GET /api/providers/id
router.get('/:id', providersController.findById);

// PUT /api/providers/id
router.put('/:id', jwt, providersController.update);

// DELETE /api/providers/id
router.delete('/:id', jwt, providersController.delete);


module.exports = router;
