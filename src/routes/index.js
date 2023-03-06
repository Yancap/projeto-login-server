const { Router } = require('express')
const routes = Router()

const loginRoutes = require('./login.routes')
const registerRoutes = require('./register.routes')

routes.use('/', loginRoutes)
routes.use('/register', registerRoutes)

module.exports = routes