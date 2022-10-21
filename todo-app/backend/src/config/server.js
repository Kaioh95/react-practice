require('dotenv').config()
const express = require('express')
const cors = require('cors')

const port = process.env.PORT || 3003

const server = express()

server.use(express.urlencoded({extended: true}))
server.use(express.json())
server.use(cors({ credentials: true, origin: process.env.FRONT_URL || 'http://localhost:3000'}))

const TodoRoutes = require('../routes/TodoRoutes')  
server.use('/api', TodoRoutes)

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})