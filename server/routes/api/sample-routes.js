const router = require('express').Router();

// Import any controllers needed here
const { getAllSamples, getSampleById, createSample, updateSampleById, deleteSampleById } = require('../../controllers/sample.controller');

// Declare the routes that point to the controllers above
router.route('/').get(getAllSamples);
router.route('/').post(createSample);

router.route('/:id').post(getSampleById);
router.route('/:id').put(updateSampleById);
router.route('/:id').delete(deleteSampleById);

module.exports = router;
