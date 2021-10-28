const express = require('express')
const router = express.Router()
const Plan = require('../controllers/plan.controller')

router.get('/subscription/:id', Plan.subscription__Plan)
router.get('/payment/gettoken/:userId', Plan.getToken)
router.post('/pament/braintree/:userId', Plan.processPayment)

module.exports = router