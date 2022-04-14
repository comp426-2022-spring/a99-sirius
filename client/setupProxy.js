const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        ['/auth/*' ,'/user', '/logout'],
        createProxyMiddleware({
            target: "http://localhost:5555"
        })
    )
}