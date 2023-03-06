const { Router } = require('express')
const registerRoutes = Router()

const RegisterController = require('../controller/RegisterController')
const registerController = new RegisterController()

const validationRequestRegister = require('../middlewares/ValidationRequestRegister')

registerRoutes.post('/', validationRequestRegister, registerController.create)


module.exports = registerRoutes