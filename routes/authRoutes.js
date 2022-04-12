const passport = require('passport')

module.exports = (app) => {
    
    // Redirection to Google Authentication 
    app.get('/auth/google', passport.authenticate('google', 
        { scope: ['profile', 'email'] }
    ))

    // Google Callback
    app.get('/auth/google/callback', 
        passport.authenticate('google', {failureRedirect: '/login'}),
        (req, res) => {
        res.redirect('/')
        }
    );

    // GitHub Auth
    app.get('/auth/github', passport.authenticate('github',
        {scope: ['profile', 'user:email']}
    ));

    // GitHub callback
    app.get('/auth/github/callback',
        passport.authenticate('github', {failureRedirect: '/login'}),
        (req, res) => {
            res.redirect('/')
        }
    )

    // Logout
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/')
    })

    // Current User
    app.get('/user', (req, res) => {
        res.send(req.user)
    })
}