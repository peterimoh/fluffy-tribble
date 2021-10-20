const app = require('./express')
const  config  = require('./config/config');
const { connectDB } = require('./config/db');

connectDB()

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('Server started on port %s.', config.port);
});