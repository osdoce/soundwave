import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/connection';

// Definición de la interfaz de usuario
export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
}

// Definición del modelo de Sequelize
export class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public created_at!: Date;
}

// Inicialización del modelo en Sequelize
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: false,
  }
);
