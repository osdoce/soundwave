import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { Trip } from './trips';

interface ActivityAttributes {
  id: number;
  tripId: number;
  activityName: string;
  description: string;
  date: Date;
  cost: number;
  //createdAt: Date;
}

interface ActivityCreationAttributes extends Optional<ActivityAttributes, 'id'> {}

export class Activity extends Model<ActivityAttributes, ActivityCreationAttributes> implements ActivityAttributes {
  public id!: number;
  public tripId!: number;
  public activityName!: string;
  public description!: string;
  public date!: Date;
  public cost!: number;

  // associated User model
  public readonly tripactivity?: Trip;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function ActivityFactory(sequelize: Sequelize): typeof Activity {
  Activity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      tripId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: Trip, // Reference the Trip model directly
        //   key: 'id',
        //   onDelete: 'CASCADE',
        // },
      },
      activityName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cost: {
        type: DataTypes.DECIMAL(10, 2),
      },
    },
    {
      tableName: 'activities',
      sequelize,
    }
  );

  return Activity;
}
