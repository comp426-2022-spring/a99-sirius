const tasks = require('../services/tasks')


module.exports = (app) => {

    app.post("/fetchTasks", tasks.fetchTasks)

    app.post("/deleteTask", tasks.deleteTask)

    app.post("/addTask", tasks.addTask)

    app.post("/updateTask", tasks.update)
}