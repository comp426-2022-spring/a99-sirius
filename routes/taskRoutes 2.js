const tasks = require('../services/tasks')


module.exports = (app) => {

    app.post("/fetchTasks", tasks.fetchTasks)

    app.post("/deleteTask", tasks.deleteTask)
<<<<<<< Updated upstream
=======

    app.post("/addTask", tasks.addTask)

    app.post("/updateTask", tasks.update)
>>>>>>> Stashed changes
}