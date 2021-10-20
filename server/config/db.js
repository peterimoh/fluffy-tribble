const mongoose = require('mongoose')
const config = require('./config')

exports.connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.mongoUri, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        });
        console.log(`MongoDB connect: ${conn.connection.host}`)
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}