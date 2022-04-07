const express = require('express');
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')


const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 1000, // this is equivalent to session active for 30 days in milliseconds
        keys: [key.cookieKey] //reference to our created cookie.key
    })
)

app.use(passport.initialize());
app.use(passport.session());

