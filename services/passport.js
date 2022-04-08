const passport = require('passport')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const GoogleStrategy  = require('passport-google-oauth20')
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
    callbackURL: '/auth/google/callback',
    proxy: true
    }, async (accessToken, refreshToken, profile, done) => {
        console.log(profile)
        const existingUser = await User.findOne({userId: profile.id})
        if(existingUser){
        // we already have a record with the given profile ID
            done(null, existingUser)
        }
        else{// make a new record of the user id in the UserDatabase
        const user = await new User( {
            userId: profile.id,
            email: profile._json.email,
            name: profile._json.name,
            firstName: profile._json.given_name,
            lastName: profile._json.family_name
        }).save()
        done(null, user) 
        }
    })
);
// GitHub Authetication
passport.use(new GitHubStrategy ({
    clientID: keys.gitHubClientID,
    clientSecret: keys.gitHibClientSecret,
    callbackURL: '/auth/github/callback',
    proxy: true
    }, async (accessToken, refreshToken, profile, done) => {
        console.log(profile)
        const existingUser = await User.findOne({userId: profile.id})
        if(existingUser){
            done(null, existingUser)
        }
        else{
            const user = await new User({
                userId: profile.id
            }).save()
            done(null, user)
        }
    }
))
//changes