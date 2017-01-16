'use strict'
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const config = require('./config')
const loggio = require('loggio')()

const app = express()
const taskModel = require('./task/taskModel')(mongoose)
mongoose.connect(config.database)
mongoose.Promise = Promise

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(require('./middlewares/allowCrossDomain'))

app.use('/task', require('./task/routes')(express, taskModel))

app.use(require('./middlewares/errorHandler'))

app.listen(config.port)
loggio.info(`FrontFest API running in ${config.port}`)
