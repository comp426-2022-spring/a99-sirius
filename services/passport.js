const passport = require('passport')
const mongoose = require('mongoose')
const GoogleStrategy  = require('passport-google-oauth20')
const GitHubStrategy = require('passport-github2')
const keys = require('../config/keys')

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(
        user => {
            done(null, user);
        }
    )
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({userId: profile.id})
    .then((existingUser) => {
        if(existingUser){
            // we already have a record with the given profile ID
            done(null, existingUser)
        } else {
            // make a new record of the user id in the UserDatabase
            new User({userId: profile.id})
            .then(user => {
                done(null,user)
            });
        }
    });
}))


// Need To Implement GitHub Authentication



// Need to Implement Local-Authentication