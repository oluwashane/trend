const router = require('express').Router()
const UserController = require('../../controllers/userController');

router.post('/new', (req, res) => {
  UserController.create(req, res);
})

router.get('/:id', (req, res) => {
  UserController.read(req, res)
})

router.patch('/:id', (req, res) => {
  UserController.update(req, res)
})

router.delete('/:id', (req, res) => {
  UserController.delete(req, res)
})

module.exports = router