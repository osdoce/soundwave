import { Trip } from '../models/trip';

export const seedTrips = async () => {
  try {
    await Trip.bulkCreate([
      {
        destination: 'Paris',
        start_date: new Date('2025-06-01'),
        end_date: new Date('2025-06-10'),
        budget: 1500.00,
        user_id: 1,  // Relación con usuario Anakin
        created_at: new Date('2025-01-23T17:36:43.323605'),
      },
      {
        destination: 'New York',
        start_date: new Date('2025-07-15'),
        end_date: new Date('2025-07-20'),
        budget: 2000.00,
        user_id: 1,  // Relación con usuario Anakin
        created_at: new Date('2025-01-23T17:36:43.323605'),
      },
      {
        destination: 'Tokyo',
        start_date: new Date('2025-09-10'),
        end_date: new Date('2025-09-20'),
        budget: 3000.00,
        user_id: 2,  // Relación con usuario Obi Wan
        created_at: new Date('2025-01-23T17:36:43.323605'),
      },
      {
        destination: 'Rome',
        start_date: new Date('2025-08-05'),
        end_date: new Date('2025-08-15'),
        budget: 1800.00,
        user_id: 3,  // Relación con usuario R2
        created_at: new Date('2025-01-23T17:36:43.323605'),
      }
    ]);

    console.log('\n----- TRIPS DATA SEEDED -----\n');
  } catch (error) {
    console.error('Error seeding trips:', error);
  }
};