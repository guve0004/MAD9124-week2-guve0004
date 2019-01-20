'use strict'

const express = require('express')

const app = express()

const cars = require('./cars')

app.get('/api/cars', (request, response) => {
    response.send({ data: cars })
})

app.get('/', (request, response) => { 

response.send('Hello from Express!')

})

app.get('/api', (request, response) => {

    const payload = {

        message: 'Hello from Express!',

        cars
    }

    response.send({
        
        data: payload
    })
})

app.listen(3030, err => {

    if (err) console.log(err)

    console.log('The server is listening on port 3030 ...')
})