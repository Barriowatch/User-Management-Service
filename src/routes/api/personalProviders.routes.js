// const mongoose = require('mongoose');
const router = require('express').Router();
const providersController = require('../../controllers/personalProvider.controller');

// POST /api/providers
router.post('/', providersController.add);

// PUT /api/providers
router.put('/', providersController.update);

// GET /api/providers
router.get('/', providersController.findById);

// DELETE /api/providers/
router.delete('/', providersController.delete);

module.exports = router;
