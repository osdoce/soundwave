import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/connection';

// Definición de la interfaz de atributos de Trip
export interface TripAttributes {
  id: number;
  user_id: number;
  destination: string;
  start_date: Date;
  end_date: Date;
  budget: number;
  created_at: Date;
}

// Definición del modelo de Sequelize
export class Trip extends Model<TripAttributes> implements TripAttributes {
  public id!: number;
  public user_id!: number;
  public destination!: string;
  public start_date!: Date;
  public end_date!: Date;
  public budget!: number;
  public created_at!: Date;
}

// Inicialización del modelo en Sequelize
Trip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    budget: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'trips',
    timestamps: false,
  }
);

// Definir la relación con el modelo de usuario
import { User } from './user';
Trip.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
User.hasMany(Trip, { foreignKey: 'user_id', as: 'trips' });
