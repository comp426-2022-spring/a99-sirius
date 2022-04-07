// This will help out application figure out what set of credential to use
// Notice that we will have DEVELOPMENT Credentials and Production Credentials

if(process.env.NODE_ENV === 'production') {
    // we are in production
    module.exports = require('./prod')
} else {
    // we are in development
    module.exports = require('./dev')
}