'use strict'

const http = require('http')

const server = http.createServer(requestHandler)

const requestHandler = (request, response) => {

if(request.url === '/api') {

    const payload = { message: 'Hello world from Node.js'}

    response.setHeader('Content-Type', 'application/json')

    response.write(JSON.stringify({data: payload}))

    response.end()
}

    response.write('Hello world from Node.js')

    response.end()
}

// server.on('request', requestHandler)

server.listen(3030, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log('Server listening on port 3030 ...')
})