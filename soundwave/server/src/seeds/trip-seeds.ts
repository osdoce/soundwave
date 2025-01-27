import { Trip } from '../models/trips.js';

export const seedTrips = async () => {
  await Trip.bulkCreate([
    {
        userId: 1,
        destination: 'Paris',
        startDate: new Date('2024-11-15'),
        endDate: new Date('2024-11-25'),
        budget: 5000.00,
      },
      {
        userId: 2,
        destination: 'Tokyo',
        startDate: new Date('2024-12-01'),
        endDate: new Date('2024-12-10'),
        budget: 7000.00,
      },
      {
        userId: 1,
        destination: 'New York',
        startDate: new Date('2025-01-10'),
        endDate: new Date('2025-01-20'),
        budget: 3000.00,
      },
  ]);
};