import express from 'express';
import {
  getAllActivites,
  getActivityById,
  createActivity,
  updateActivity,
  deleteActivity,
} from '../../controllers/activity-controller.js';

const router = express.Router();

// GET /tickets - Get all tickets
router.get('/', getAllActivites);

// GET /tickets/:id - Get a ticket by id
router.get('/:id', getActivityById);

// POST /tickets - Create a new ticket
router.post('/', createActivity);

// PUT /tickets/:id - Update a ticket by id
router.put('/:id', updateActivity);

// DELETE /tickets/:id - Delete a ticket by id
router.delete('/:id', deleteActivity);

export { router as activityRouter };
