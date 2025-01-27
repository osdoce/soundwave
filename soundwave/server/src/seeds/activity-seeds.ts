import { Activity } from "../models/activities.js";

export const seedActivities = async () => {
  await Activity.bulkCreate([
    {
        tripId: 1,
        activityName: 'Visit the Eiffel Tower',
        description: 'Ascend the iconic tower for breathtaking views of Paris.',
        date: new Date('2024-11-17'),
        cost: 30.00,
      },
      {
        tripId: 1,
        activityName: 'Louvre Museum',
        description: 'Explore the world-renowned art museum.',
        date: new Date('2024-11-19'),
        cost: 15.00,
      },
      {
        tripId: 2,
        activityName: 'Shibuya Crossing',
        description: 'Experience the iconic pedestrian scramble.',
        date: new Date('2024-12-03'),
        cost: 0.00,
      },
      {
        tripId: 2,
        activityName: 'Tokyo Tower',
        description: 'Enjoy panoramic views of the city.',
        date: new Date('2024-12-05'),
        cost: 25.00,
      },
      {
        tripId: 3,
        activityName: 'Visit Times Square',
        description: 'Experience the vibrant heart of New York City.',
        date: new Date('2025-01-12'),
        cost: 0.00,
      },
      {
        tripId: 3,
        activityName: 'Central Park',
        description: 'Enjoy a leisurely stroll through the famous park.',
        date: new Date('2025-01-15'),
        cost: 0.00,
      },
  ]);
};