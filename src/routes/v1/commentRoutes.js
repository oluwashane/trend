const router = require('express').Router()
const CommentController = require('../../controllers/commentController');

router.post('/new', (req, res) => {
  CommentController.create(req, res);
})

router.get('/stats', (req, res) =>  {
  CommentController.getStat(req, res)
})


router.get('/:userId', (req, res) => {
  CommentController.getCommentsOnUser(req, res)
})

router.get('/single/:id', (req, res) => {
  CommentController.read(req, res)
})

router.patch('/:id', (req, res) => {
  CommentController.update(req, res)
})

router.delete('/:id', (req, res) => {
  CommentController.delete(req, res)
})

module.exports = router