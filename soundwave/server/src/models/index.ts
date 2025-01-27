import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
import { UserFactory } from './user.js';
import { ActivityFactory } from './activities.js';
import { TripFactory } from './trips.js';

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

const User = UserFactory(sequelize);
const Trip = TripFactory(sequelize);
const Activity = ActivityFactory(sequelize);


// User.hasMany(Ticket, { foreignKey: 'assignedUserId' });
// Ticket.belongsTo(User, { foreignKey: 'assignedUserId', as: 'assignedUser'});

User.hasMany(Trip, {foreignKey: 'userId'} );
Trip.belongsTo(User, { foreignKey: 'userId', as: 'tripuser'});

Trip.hasMany(Activity, {foreignKey: 'tripId'});
Activity.belongsTo(Trip, {foreignKey: 'tripId', as: 'tripactivity'})


export { sequelize, User, Trip };
