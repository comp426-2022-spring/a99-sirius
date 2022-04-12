const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        ["/current_user", "/auth/google"],
        createProxyMiddleware({
            target: "http://localhost:5555"
        })
    )
}