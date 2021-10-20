const express = require('express')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')

const app = express()


//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


//routes
app.get('/', (req, res) => {
    res.status(200).json({time: Date().toString()})
})

module.exports=app