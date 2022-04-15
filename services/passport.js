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
        const existingUser = await User.findOne({userId: profile.id})
        if(!existingUser){
            const login = profile._json.email.split("@")
            const user = await new User({
                userId: profile.id,
                email: profile._json.email,
                login: login[0],
                name: profile._json.name,
                firstName: profile._json.given_name,
                lastName: profile._json.family_name,
                password: passwordHash.generate("password")
                }).save()
            done(null, user)
        }else{
            done(null, existingUser)
        }
    })    
);

// GitHub Authentication
passport.use(new GitHubStrategy ({
    clientID: keys.gitHubClientID,
    clientSecret: keys.gitHibClientSecret,
    callbackURL: '/auth/github-token',
    proxy: true
    }, async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({userId: profile.id})
        if(existingUser){
            done(null, existingUser)
        }else{
            const name = profile._json.name.split(" ")
            const user = await new User({
                userId: profile.id,
                email: profile._json.email,
                login: profile._json.login,
                name: profile._json.name,
                firstName: name[0],
                lastName: name[1] + " " + name[2],
                password: passwordHash.generate("password")
            }).save()
            done(null, user)
        }
    }
))

// Local Authentication
passport.use(new LocalStrategy( async (username, password, cb) => {
    try{
        const user = await User.findOne(username.split("@")[0])
        if(!user){
            return cb(null, false, {message : 'Incorrect username or password.'})
        }
        const verified = passwordHash.verify(password)
        if(!verified){
            return cb(null, false, {message: 'Incorrect username or password'})
        }
        return cb(null, user)
    } catch(err){
        return(cb(err))
    }}
))