const mongoose = require('mongoose')
const { Schema } = mongoose

const User = mongoose.model('User', 
    new Schema({
        name: { type: String, required: true},
        email: { type: String, required: true},
        password: { type: String, min: 6, max: 12, required: true}
    }, {timestamps: true})
)

module.exports = User