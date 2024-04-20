const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        default: Date(),
        // required: true,
    },
    isComplated: {
        type: Boolean,
        default: false
    },

    user: {
        type: String,
    },


}, { timestamps: true })

exports.Task = new mongoose.model('Task', taskSchema)