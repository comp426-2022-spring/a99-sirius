const passport = require('passport')
const mongoose = require('mongoose')
const passwordHash = require('password-hash')
const GoogleStrategy = require('passport-google-oauth20')
const GitHubStrategy = require('passport-github2')
const LocalStrategy = require('passport-local')
const keys = require('../config/keys')
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser(async (id, done) => {
    user = await User.findById(id)
    done(null, user);
});

// Google Authentication
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google-token',
    proxy: true
    }, async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({email: profile._json.email})
        if(!existingUser){
            const login = profile._json.email.split("@")
            const user = await new User({
                userId: profile.id,
                email: profile._json.email,
                login: login[0],
                firstName: profile._json.given_name,
                lastName: profile._json.family_name,
                password: passwordHash.generate("password"),
                ownPassword: false,
                }).save()
            return done(null, user)
        }else{
            return done(null, existingUser)
        }
    })    
);

// GitHub Authentication
passport.use(new GitHubStrategy ({
    clientID: keys.gitHubClientID,
    clientSecret: keys.gitHibClientSecret,
    callbackURL: '/auth/github-token',
    }, async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({userId: profile.id})
        if(existingUser){
            return done(null, existingUser)
        }else{
            const name = profile._json.name.split(" ")
            const user = await new User({
                userId: profile.id,
                email: profile._json.email,
                login: profile._json.login,
                firstName: name[0],
                lastName: name[1] + " " + name[2],
                password: passwordHash.generate("password"),
                ownPassword: false
            }).save()
            return done(null, user)
        }
    }
))

// Local Authentication
passport.use(new LocalStrategy( async (username, password, done) => {
    const user = await User.findOne({ login : username})
    if(!user) return done(null, false, {message: "Incorrect Username of Password"})
    const verified = passwordHash.verify(password, user.password)
    if(!verified){
        return done(null, false, {message: 'Incorrect username or password!'})
    }
    return done(null, user)
    }
))

// Registration
exports.register = function(req, res) {
    User.findOne({ email: req.body.email }, (err, user) =>{
        // verify if email address already in use
        if(user) {
            res.status(200).json({ success: false, message: "Email already in use", emailError: true, usernameError: false})
            return
        }
        else{
            User.findOne( {login: req.body.login}, (err, user) => {
                if(user) {
                    res.status(200).json({ success: false, message: "Username already in use" , usernameError: true, emailError: false})
                    return
                }
                else{
                    data = {
                        userId: randomID(),
                        ...req.body,
                    }
                    const newData = {
                        ...data,
                        password: passwordHash.generate(data.password),
                        ownPassword: true
                    }
                    User.create(newData, (err) => {
                        if(err){
                            console.error(err)
                            res.status(200).json({ success: false})
                        }
                        res.status(200).json({success: true, user: newData, message: "Authentication succeeded"})
                        return
                    })
                }
            })
        }
        
    })
}

// CHANGE PASSWORD
exports.changePassword = async function (req, res) {
    const new_password = passwordHash.generate(req.body.password)
    let doc = await User.findOneAndUpdate({ login : req.body.login}, {password: new_password, ownPassword: true}, {returnOriginal: false})
    if(doc){
        return res.status(200).json({success: true, user : doc})
    }
}

function randomID() {
    var ID = Math.floor(Math.random() * 90000000000000) + 10000000000000
    return ID
}