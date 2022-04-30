## Database documentation

In this project we connect to a Mongo DG Database to store:

1. A collection of Users and User information.
2. A collection of User tasks.

Our application uses a MONGO DB URI to connect remotely, notice that these keys are private and just shared with the developers of the project. In order to run the project remotely you need to *contact the developer team* for them to provide the required credentials.

### User Schema

````
    userId: String,
    login: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    ownPassword: boolean
````

### Tasks Schema

````
    taskId: String,
    login: String,
    name: String,
    description: String,
    reminder: boolean,
    completed:  boolean,
    priority: String,
    dueDate: String,
````

