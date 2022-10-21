const mongoose = require('mongoose')
const { Schema } = mongoose

const Todo = mongoose.model('Todo', 
    new Schema({
        description: {
            type: String,
            required: true,
        },
        done: {
            type: Boolean,
            require: true,
            default: false,
        },
    }, {timestamps: true}),
)

module.exports = Todo