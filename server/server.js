const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const fs = require('fs').promises

const server = express()

// Server configuration
const publicFolder = __dirname + '/public'
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')

// Routes
server.get('/', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'data/data.json')
    const data = JSON.parse(await fs.readFile(filePath, { encoding: 'utf-8' }))

    res.render('home', data)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

module.exports = server
