import { Request, Response } from 'express';
import { Activity } from '../models/activities.js';
import { Trip } from '../models/trips.js';
// GET /activities
export const getAllActivites = async (_req: Request, res: Response) => {
  try {
    const activities = await Activity.findAll({
      include: [
        {
          model: Trip,
          as: 'tripactivity', // This should match the alias defined in the association
          attributes: ['destination'], // Include only the username attribute
        },
      ],
    });
    res.json(activities);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// GET /activities/:id
export const getActivityById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const activity = await Activity.findByPk(id, {
      include: [
        {
          model: Trip,
          as: 'tripactivity', // This should match the alias defined in the association
          attributes: ['destination'], // Include only the username attribute
        },
      ],
    });
    if (activity) {
      res.json(activity);
    } else {
      res.status(404).json({ message: 'Activity not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// POST /activity
export const createActivity = async (req: Request, res: Response) => {
  const { tripId, activityName, description, date, cost } = req.body;
  try {
    const newActivity = await Activity.create({ tripId, activityName, description, date, cost });
    res.status(201).json(newActivity);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /activity/:id
export const updateActivity = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { tripId, activityName, description, date, cost} = req.body;
  try {
    const activity = await Activity.findByPk(id);
    if (activity) {
      activity.tripId = tripId;
      activity.activityName = activityName;
      activity.description = description;
      activity.date = date;
      activity.cost = cost;
      await activity.save();
      res.json(activity);
    } else {
      res.status(404).json({ message: 'Activity not found' });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /activity/:id
export const deleteActivity = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const activity = await Activity.findByPk(id);
    if (activity) {
      await activity.destroy();
      res.json({ message: 'Activity deleted' });
    } else {
      res.status(404).json({ message: 'Activity not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
