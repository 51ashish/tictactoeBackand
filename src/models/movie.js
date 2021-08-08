const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require('./task')

const movieSchema = new mongoose.Schema({
    poster: {
        type: String,
        required: true,
        trim: true
    },
    character: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    gener: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const movie = mongoose.model('movie', movieSchema)

module.exports = movie