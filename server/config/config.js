const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8080,
    jwtSecret: process.env.JWT_SECRET || 'secretsecret1010',
}

module.exports = config