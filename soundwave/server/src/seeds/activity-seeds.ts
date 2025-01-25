import { Activity } from '../models/activity';

export const seedActivities = async () => {
  try {
    await Activity.bulkCreate([
      {
        trip_id: 1,
        activity_name: 'Eiffel Tower Visit',
        description: 'Visit the Eiffel Tower.',
        date: new Date('2025-06-02'),
        cost: 25.00,
        created_at: new Date('2025-01-23T17:36:43.330767'),
      },
      {
        trip_id: 1,
        activity_name: 'Louvre Museum Tour',
        description: 'Explore the world-famous museum.',
        date: new Date('2025-06-03'),
        cost: 20.00,
        created_at: new Date('2025-01-23T17:36:43.330767'),
      },
      {
        trip_id: 2,
        activity_name: 'Statue of Liberty',
        description: 'Tour the Statue of Liberty.',
        date: new Date('2025-07-16'),
        cost: 30.00,
        created_at: new Date('2025-01-23T17:36:43.330767'),
      },
      {
        trip_id: 2,
        activity_name: 'Broadway Show',
        description: 'Watch a live musical on Broadway.',
        date: new Date('2025-07-17'),
        cost: 150.00,
        created_at: new Date('2025-01-23T17:36:43.330767'),
      },
      {
        trip_id: 3,
        activity_name: 'Shibuya Crossing',
        description: 'Experience the busiest crossing in the world.',
        date: new Date('2025-09-12'),
        cost: 0.00,
        created_at: new Date('2025-01-23T17:36:43.330767'),
      },
      {
        trip_id: 3,
        activity_name: 'Mt. Fuji Tour',
        description: 'Guided tour of the famous Mt. Fuji.',
        date: new Date('2025-09-15'),
        cost: 250.00,
        created_at: new Date('2025-01-23T17:36:43.330767'),
      },
      {
        trip_id: 4,
        activity_name: 'Colosseum Tour',
        description: 'Historical tour of the Colosseum.',
        date: new Date('2025-08-07'),
        cost: 40.00,
        created_at: new Date('2025-01-23T17:36:43.330767'),
      },
      {
        trip_id: 4,
        activity_name: 'Vatican Museums',
        description: 'Visit the Vatican Museums and Sistine Chapel.',
        date: new Date('2025-08-10'),
        cost: 50.00,
        created_at: new Date('2025-01-23T17:36:43.330767'),
      },
    ]);

    console.log('\n----- ACTIVITIES DATA SEEDED -----\n');
  } catch (error) {
    console.error('Error seeding activities:', error);
  }
};
