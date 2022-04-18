const mongoose = require('mongoose')
const Schema = mongoose.Schema // this is equivalent to const {Schema} = mongoose 

const userSchema = new Schema({
    userId: String,
    email: String,
    login: String,
    name: String,
    firstName: String,
    lastName: String,
    password: String,
})

mongoose.model('users', userSchema);