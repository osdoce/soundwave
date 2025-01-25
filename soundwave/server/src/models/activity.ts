import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/connection';

// Definición de la interfaz de atributos de Activity
export interface ActivityAttributes {
  id: number;
  trip_id: number;
  activity_name: string;
  description: string;
  date: Date;
  cost: number;
  created_at: Date;
}

// Definición del modelo de Sequelize
export class Activity extends Model<ActivityAttributes> implements ActivityAttributes {
  public id!: number;
  public trip_id!: number;
  public activity_name!: string;
  public description!: string;
  public date!: Date;
  public cost!: number;
  public created_at!: Date;
}

// Inicialización del modelo en Sequelize
Activity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    trip_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    activity_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cost: {
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
    tableName: 'activities',
    timestamps: false,
  }
);

// Definir la relación con el modelo de Trip
import { Trip } from './trip';
Activity.belongsTo(Trip, { foreignKey: 'trip_id', as: 'trip' });
Trip.hasMany(Activity, { foreignKey: 'trip_id', as: 'activities' });
