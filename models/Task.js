const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    taskId: String,
    taskUser: String,
    taskName: String,
    taskDescription: String,
    taskReminder: Boolean,
})

mongoose.model('tasks', taskSchema)