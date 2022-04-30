## User Task Routes

Endpoints corresponding to user authentication cna be found in 
`/routes/taskRoutes.js`

### Add Task

The user can add a new task to the database.

````
/addTask
````

Request body:

````
{
    login: "username",
    name: "Task Name",
    description: "Description",
    reminder: true,
    completed: false,
    priority: "high",
    dueDate: "2022-04-29T21:42"
}
````

Response:

````
{
    success: true,
    task: {
        _id: '626c9c62dd62387b334bdc6c',
        taskId: 'sha1$aba686fe$1$f6c884e1133040d5cabf5e1d44905dd48571e865',
        login: 'guillesaez22',
        name: 'Task Name',
        description: 'Task Description',
        reminder: false,
        completed: false,
        priority: 'medium',
        dueDate: '2022-04-29T22:18',
        __v: 0
    }
}
````

### Delete Task

````
/deleteTask
````

Request body:

````
{
    taskId: "sha1$ccdaef0d$1$5c07373edc9354da40005532a0af83adab1068d6"
}
````

Response:

````
{
    success: true,
    message: "Task deleted Successfully",
    taskId: "sha1$ccdaef0d$1$5c07373edc9354da40005532a0af83adab1068d6"
}
````

### Fetch Tasks

````
/fetchTasks
````

Request body:

````
{
    login
}
````

Response:

````
{
    success: true,
    message: "Task deleted Successfully",
    tasks: [
        {
        _id: '626c9c62dd62387b334bdc6c',
        taskId: 'sha1$aba686fe$1$f6c884e1133040d5cabf5e1d44905dd48571e865',
        login: 'guillesaez22',
        name: 'Task Name',
        description: 'Task Description',
        reminder: false,
        completed: false,
        priority: 'medium',
        dueDate: '2022-04-29T22:18',
        __v: 0
        },
        {
        _id: '626c9c62dd62387b334bdc6c',
        taskId: 'sha1$aba686fe$1$f6c884e1133040d5cabf5e1d44905dd48571e865',
        login: 'guillesaez22',
        name: 'Task Name',
        description: 'Task Description',
        reminder: false,
        completed: false,
        priority: 'medium',
        dueDate: '2022-04-29T22:18',
        __v: 0
        }  
    ]
}
````

### Update Task

````
/updateTask
````

Request body:

````
{
    taskId: "sha1$ccdaef0d$1$5c07373edc9354da40005532a0af83adab1068d6",
    reminder: true,
    completed: true,
    dueDate: '2022-04-29T22:18',
    priority: "high",
}
````

Response:
{
    success: true,
}