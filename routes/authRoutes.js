const passport = require('passport')
const user = require('../services/passport')

module.exports = (app) => {

    // Redirection to Google Authentication 
    app.get('/auth/google', passport.authenticate('google',
        { scope: ['profile', 'email'] }
    ), (req, res) => {
        res.status(200).json({ success: true })
    })

    // Google Callback
    app.get('/auth/google-token',
        passport.authenticate('google', { failureRedirect: '/login' }),
        (req, res) => {
            res.status(200).redirect("/")
        }
    );

    // ------------------------------------------

    // GitHub Auth
    app.get('/auth/github', passport.authenticate('github',
        { scope: ['user:email'] }
    ));

    // GitHub callback
    app.get('/auth/github-token',
        passport.authenticate('github', { failureRedirect: '/login' }),
        (req, res) => {
            res.status(200).redirect("/")
        }
    )

    // ------------------------------------------

    // Local Authentication
    app.post('/login/auth', (req, res, next) => {
        passport.authenticate('local', function(err, user, info) {
            if(err) return next(err)
            if(!user) {
                return res.status(200).json({ success : false, message: info.message })
            }
            req.logIn(user, loginErr => {
                if(loginErr) {
                    
                    return res.status(200).json({ success: false,  message: loginErr})
                }
                return res.status(200).json( {success: true, user: user, message: "authenticate succeeded"})
            })
        })(req, res, next)
    })

    // Register
    app.post('/signUp/auth', user.register)
    
    // ------------------------------------------

    // Logout
    app.get('/logout', (req, res) => {
        req.logout() 
        res.status(200).redirect('/')
    })

    // Change Password
    app.post("/changePassword", user.changePassword)
    // ------------------------------------------

    // Current User
    app.get('/user', (req, res) => {
        res.status(200).send(req.user)
    })
}