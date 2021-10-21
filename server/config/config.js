const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,
  jwtRegister: process.env.JWT_REGISTER || 'secretregister',
  jwtSecret: process.env.JWT_SECRET || 'secretsecret1010',
  mongoUri:
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' +
      (process.env.IP || 'localhost') +
      ':' +
      (process.env.MONGO_PORT || '27017') +
    '/vpsserve',
  email: process.env.EMAIL || 'alivps39@gmail.com',
  pass: process.env.PASS || 'Alibackendmailer22'
};

module.exports = config