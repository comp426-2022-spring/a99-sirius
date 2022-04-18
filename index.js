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

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client'));
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded(extended = true))

var corsOptions = {
    origin: keys.URL,
    credentials: true,
    methods: ['POST', 'GET', 'UPDATE', 'PUT']
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

const PORT = process.env.PORT || 5555
app.listen(PORT)