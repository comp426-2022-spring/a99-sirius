const passport = require('passport')

module.exports = (app) => {
    
    // Redirection to Google Authentication 
    app.get('/auth/google', passport.authenticate('google', 
        { scope: ['profile', 'email'] }
    ))

    // Google Callback
    app.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/login'}));

    // GitHub Auth
    app.get('/auth/github', passport.authenticate('github',
        {scope: ['profile', 'user:email']}
    ));

    // GitHub callback
    app.get('/auth/github/callback', passport.authenticate('github', {failureRedirect: '/login'}))

    // Logout
    app.get('/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    })

    // Current User
    app.get('/current_user', (req, res) => {
        res.send(req.user.name);
    })

}