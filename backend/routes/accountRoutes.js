// routes/accountRoutes.js
const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

// Create Account Route
router.post('/accounts', accountController.createAccount);

// Get Account by ID Route
router.get('/accounts/:id', accountController.getAccount);

module.exports = router;
