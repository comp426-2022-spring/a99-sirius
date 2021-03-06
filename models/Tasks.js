const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    taskId: String,
    login: String,
    name: String,
    description: String,
    reminder: Boolean,
    completed: Boolean,
    priority: String,
    dueDate: String,
})

mongoose.model('tasks', taskSchema)