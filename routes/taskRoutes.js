const tasks = require('../services/tasks')


module.exports = (app) => {

    app.post("/fetchTasks", tasks.fetchTasks)

    app.post("/deleteTask", tasks.deleteTask)
}