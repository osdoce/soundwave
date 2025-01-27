import express from 'express';
import {
  getAllTrips,
  getTripById,
  createTrip,
  updateTrip,
  deleteTrip,
} from '../../controllers/trip-controller.js';

const router = express.Router();

// GET /tickets - Get all tickets
router.get('/', getAllTrips);

// GET /tickets/:id - Get a ticket by id
router.get('/:id', getTripById);

// POST /tickets - Create a new ticket
router.post('/', createTrip);

// PUT /tickets/:id - Update a ticket by id
router.put('/:id', updateTrip);

// DELETE /tickets/:id - Delete a ticket by id
router.delete('/:id', deleteTrip);

export { router as tripRouter };
