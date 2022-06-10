const router = require('express').Router();
const userRouter = require('./userRoutes');
const commentRouter = require('./commentRoutes');

router.use('/users', userRouter);
router.use('/comments', commentRouter)

module.exports = router