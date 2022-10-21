const router = require('express').Router()
const todoController = require('../controllers/todoController')

router.post("/create", todoController.register)
router.get("/get", todoController.getAll)
router.get("/get/:id", todoController.getById)
router.patch("/edit/:id", todoController.editTodo)
router.delete("/delete/:id", todoController.deleteTodo)

module.exports = router;