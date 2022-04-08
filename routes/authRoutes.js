const passport = require('passport')

module.exports = (app) => {
    
    // Redirection to Google Authentication 
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))

    // Google Callback
    app.get('/auth/google/callback', passport.authenticate('google'));

    // Local Authentication --> Review
    app.get('/login/password', passport.authenticate('local',{ failureRedirect: '/login', failureMessage: true}));


    // Logout
    app.get('/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    })

    // Current User
    app.get('/current_user', (req, res) => {
        res.send(req.user);
    })

}