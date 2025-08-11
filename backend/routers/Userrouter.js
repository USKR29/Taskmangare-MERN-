const exp = require('express')
const { signupUser, loginUser } = require('../controllers/Usercontrollers')

const userRouter = exp.Router()

userRouter.post('/signup',signupUser);
userRouter.post('/login',loginUser)

module.exports = userRouter