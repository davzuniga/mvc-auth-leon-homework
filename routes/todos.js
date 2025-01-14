const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.put('/markYesFollowUp', todosController.markYesFollowUp)

router.put('/markNoFollowUp', todosController.markNoFollowUp)

router.put('/markYesLinkedin', todosController.markYesLinkedin)

router.put('/markNoLinkedin', todosController.markNoLinkedin)

router.put('/markYesTwitter', todosController.markYesTwitter)

router.put('/markNoTwitter', todosController.markNoTwitter)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router