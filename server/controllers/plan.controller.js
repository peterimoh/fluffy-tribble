const { Packages } = require('../utils/packages');
const braintree = require('braintree');
const config = require('../config/config');

//braintree config
const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: config.merchantId,
  publicKey: config.publicKey,
  privateKey: config.privateKey
});

exports.subscription__Plan = async (req, res) => {
  let subscriptionPkg = req.params.id.split('$')[0];
  let subscriptionPlan = req.params.id.split('$')[1];

  if (Packages[subscriptionPkg] === undefined) {
    return res.status(404).json({ error: 'Plan does not exist' });
  } else if (Packages[subscriptionPkg][subscriptionPlan] === undefined) {
    return res.status(404).json({ error: 'Plan does not exist' });
  } else {
    const result = Packages[subscriptionPkg][subscriptionPlan];
    res.status(200).json({ msg: 'Package found', data: result });
  }
};

exports.getToken = (req, res) => {
  gateway.clientToken.generate({}, (err, response) => {
    console.log(req.params.userId)
    if (err) return res.status(500).json({ error: err })
    res.status(200).json({response})
  })
};

exports.processPayment = (req, res) => {
  let nonceFromTheClient = req.body.paymentMethodNonce

  let amountFromTheClient = req.body.amount
  gateway.transaction.sale({
    amount: amountFromTheClient,
    paymentMethodNonce: nonceFromTheClient,
    options: { submitForSettlement: true },
    
  }, (err, result) => {
    if (err) return res.status(400), json({ error: err })
    return res.status(200).json(result)
  })
}