const exp = require('express')
const taskmod = require('../model/Taskmodel.js')
const { createPost, getallPosts, updateTask, deleteTask } = require('../controllers/Taskcontrollers.js')
const requireAuth = require('../middleware/requireAuth.js')

const rounter = exp.Router()

rounter.use(requireAuth)

rounter.post('/',createPost)

rounter.get('/',getallPosts)


rounter.patch('/:id',updateTask)

rounter.delete('/:id',deleteTask)

module.exports = rounter