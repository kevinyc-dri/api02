const functions = require("firebase-functions")
const express = require('express')
const { getCars, newCar, updateCar, deleteCar } = require('./src/cars')

const app = express()

app.get('/cars', getCars)
app.post('/cars', newCar)
app.patch('/cars/:carId', updateCar)
app.delete('/cars/:carId', deleteCar)

exports.app = functions.https.onRequest(app)


