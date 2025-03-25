const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Routes
router.get('/', paymentController.getAllPayments);
router.get('/:id', paymentController.getPaymentById);
router.post('/', paymentController.createPayment);

module.exports = router;
