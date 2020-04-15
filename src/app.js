const express = require('express')

const exerciseOneRouter = require('./routers/exercise1')
const exerciseTwoRouter = require('./routers/exercise2')
const exerciseThreeRouter = require('./routers/exercise3')
const exerciseFourRouter = require('./routers/exercise4')
const exerciseFiveRouter = require('./routers/exercise5')
const exerciseSixRouter = require('./routers/exercise6')
const app = express()

app.use(express.json())
app.use(exerciseOneRouter)
app.use(exerciseTwoRouter)
app.use(exerciseThreeRouter)
app.use(exerciseFourRouter)
app.use(exerciseFiveRouter)
app.use(exerciseSixRouter)

module.exports = app