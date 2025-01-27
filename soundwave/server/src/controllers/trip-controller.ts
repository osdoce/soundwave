import { Request, Response } from 'express';
import { Trip } from '../models/trips.js';
import { User } from '../models/user.js';

// GET /trips
export const getAllTrips = async (_req: Request, res: Response) => {
  try {
    const trips = await Trip.findAll({
      include: [
        {
          model: User,
          as: 'tripuser', // This should match the alias defined in the association
          attributes: ['username'], // Include only the username attribute
        },
      ],
    });
    res.json(trips);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// GET /trips/:id
export const getTripById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const trip = await Trip.findByPk(id, {
      include: [
        {
          model: User,
          as: 'tripuser', // This should match the alias defined in the association
          attributes: ['username'], // Include only the username attribute
        },
      ],
    });
    if (trip) {
      res.json(trip);
    } else {
      res.status(404).json({ message: 'Trip not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// POST /trips
export const createTrip = async (req: Request, res: Response) => {
  const { destination, startDate, endDate, budget, userId } = req.body;
  try {
    const newTrip = await Trip.create({ destination, startDate, endDate, budget, userId });
    res.status(201).json(newTrip);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /trips/:id
export const updateTrip = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { destination, startDate, endDate, budget, userId } = req.body;
  try {
    const trip = await Trip.findByPk(id);
    if (trip) {
        trip.userId = userId;
        trip.destination = destination;
        trip.startDate = startDate;
        trip.startDate = endDate;
        trip.budget = budget;
      
      await trip.save();
      res.json(trip);
    } else {
      res.status(404).json({ message: 'Trip not found' });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /trip/:id
export const deleteTrip = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const trip = await Trip.findByPk(id);
    if (trip) {
      await trip.destroy();
      res.json({ message: 'Trip deleted' });
    } else {
      res.status(404).json({ message: 'Trip not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
