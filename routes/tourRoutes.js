const express = require('express');
const tourController = require('./../controllers/tourController.js');
const router = express.Router();

router.param('id', tourController.checkID);

// Create a checkBody middleware
// Check if body contains the name property and a price property
// If not - sending back 400 status code
// add it to the post middletrack

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkbody, tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
