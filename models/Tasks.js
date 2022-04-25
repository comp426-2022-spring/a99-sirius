const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    taskId: String,
    user: String,
    name: String,
    description: String,
    reminder: Boolean,
    completed: Boolean,
})

mongoose.model('tasks', taskSchema)