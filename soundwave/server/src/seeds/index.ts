import { seedUsers } from './user-seeds.js';
//import { seedTickets } from './ticket-seeds.js';
import { seedActivities } from './activity-seeds.js';
import { seedTrips } from './trip-seeds.js';
import { sequelize } from '../models/index.js';

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    
    await seedTrips();
    console.log('\n----- TRIPS SEEDED -----\n');

    await seedActivities();
    console.log('\n----- ACTIVITIES SEEDED -----\n');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
