const Packages = require('./packages');

exports.subscriptionPlans = (result) => {
  let pending = [];
  let running = [];

  for (let obj of result) {
    obj.status == 'pending' ? pending.push(obj) : running.push(obj);
  }

  if (running.length) {
    for (let i = 0; i < running.length; i++) {
      let { Sale_price, Duration } =
        Packages[running[i].package.split('-')[0]][
          running[i].package.split('-')[1]
        ];
    }
  }
};
