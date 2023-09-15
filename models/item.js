const mongoose = require('mongoose')

// Ensure the Category model is processed
require('./category')

const itemSchema = require('./itemSchema')

module.exports = mongoose.model('Item', itemSchema)