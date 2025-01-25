import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

// Crear la instancia de Sequelize
export const sequelize = new Sequelize(
  process.env.DB_NAME || 'trip_planner_db',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: false, // Desactivar logs en la consola
  }
);

// Importar modelos
import { User } from './user';
import { Trip } from './trip';
import { Activity } from './activity';

// Asociaciones entre modelos
User.hasMany(Trip, { foreignKey: 'user_id', as: 'trips' });
Trip.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

Trip.hasMany(Activity, { foreignKey: 'trip_id', as: 'activities' });
Activity.belongsTo(Trip, { foreignKey: 'trip_id', as: 'trip' });

// Exportar los modelos y la conexión
export { User, Trip, Activity };
