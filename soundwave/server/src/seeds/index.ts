import { seedUsers } from './user-seeds.js';
import { seedTrips } from './trip-seeds.js';
import { seedActivities } from './activity-seeds.js';
import { sequelize } from '../models/index.js';

const seedAll = async (): Promise<void> => {
  try {
    // Sincronizar la base de datos (elimina y vuelve a crear las tablas)
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    // Insertar datos de usuarios
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    
    // Insertar datos de viajes
    await seedTrips();
    console.log('\n----- TRIPS SEEDED -----\n');
    
    // Insertar datos de actividades
    await seedActivities();
    console.log('\n----- ACTIVITIES SEEDED -----\n');
    
    process.exit(0);  // Terminar el proceso exitosamente
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);  // Terminar con error
  }
};

// Ejecutar la función de seed
seedAll();
