const router = require('express').Router();
const sampleRoutes = require('./sample-routes');
const userRoutes = require('./user.routes');
const thoughtRoutes = require('./thought.routes');

router.use('/sample', sampleRoutes);
router.use('/users', userRoutes)
router.use('/thoughts', thoughtRoutes)

module.exports = router;
