const { reset } = require('nodemon');
const passport = require('passport')

module.exports = (app) => {

    // Redirection to Google Authentication 
    app.get('/auth/google', passport.authenticate('google',
        { scope: ['profile', 'email'] }
    ))

    // Google Callback
    app.get('/auth/google-token',
        passport.authenticate('google', { failureRedirect: '/login' }),
        (req, res) => {
            redirectPath = "/" + req.user.login
            res.redirect(redirectPath)
        }
    );

    // GitHub Auth
    app.get('/auth/github', passport.authenticate('github',
        { scope: ['profile', 'user:email'] }
    ));

    // GitHub callback
    app.get('/auth/github-token',
        passport.authenticate('github', { failureRedirect: '/login' }),
        (req, res) => {
            redirectPath = "/" + req.user.login
            res.redirect(redirectPath)
        }
    )

    // Local Authentication
    app.post('/login/auth', (req, res) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                throw err;
            }

            if (!user) {
                res.send("No User Exist")
            } else {
                req.login()(user, err => {
                    if (err) {
                        throw err
                    }
                    res.send("Successfully authenticated")
                    console.log(req.user)
                }
                )
            }
        })
    })

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