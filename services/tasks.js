const mongoose = require('mongoose')
const axios = require('axios')
const passwordHash = require('password-hash')

const Tasks = mongoose.model('tasks')

// ---- FETCH TASKS ----
exports.fetchTasks =  async function(req, res) {
    await Tasks.find({ login: req.body.login } , (err, tasks) => {
        if (err) return res.json({success : false, message: "Could not get Tasks!"})

        if(tasks.length == 0){
            return res.json({success: false, message: "No tasks on Record" })
        }

        return res.json( {success: true, tasks: tasks, message: "Tasks Fetched!"})
    }).clone()
}

// ---- DELETE TASK ----
exports.deleteTask = async function(req, res) {
    await Tasks.deleteOne( {taskId: req.body.taskId }, (err) => {
        if(err) return res.json( {success: false, message: "Task Could not be deleted!"})

        return res.json({success: true, message: "Task deleted Successfully", taskId: req.body.taskId})
    }).clone()
}


// ---- ADD TASK ----
exports.addTask = async function(req, res){
    const taskId = passwordHash.generate(req.body.login + toString(randomNumber()))
    data = {...req.body, taskId: taskId}
    Tasks.create(data, (err) => {
        if(err){
            console.error(err)
            res.json({ success: false })
        }
        return res.json({ success: true, task: data })
    })
}

// ---- UPDATE TASK ----
exports.update = async function(req, res) {
    let doc = await Tasks.findOneAndUpdate( {taskId: req.body.taskId}, {reminder: req.body.reminder, completed: req.body.completed}, {returnOriginal: false} )
    if(doc.login){
        return res.json({success: true})
    }else{
        return res.json({success: false})
    }
}

function randomNumber() {
    var number = Math.floor(Math.random() * 90000000000000) + 10000000000000
    return number
}