const express = require('express');
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys');
const bodyParser = require('body-parser')
const cors = require('cors');

require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURI)

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

var corsOptions = {
    origin: [keys.URL, "http://localhost:5555"],
    credentials: true,
    methods: ['POST', 'GET', 'UPDATE', 'PUT'],
    
}
app.use(cors(corsOptions))

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 1000, // this is equivalent to session active for 30 days in milliseconds
        keys: [keys.cookieKey] //reference to our created cookie.key
    })
)

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file
    app.use(express.static('client/build'));

    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const PORT = process.env.PORT || 5555
console.log(`Server is Up and Running on port: ${PORT}.`)
app.listen(PORT)