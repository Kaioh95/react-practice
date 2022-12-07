const openRouter = require('express').Router()
const userController = require('../controllers/userController')

openRouter.post("/login", userController.login)
openRouter.post("/signup", userController.signup)
openRouter.post("/validateToken", userController.validateToken)

module.exports = openRouter;