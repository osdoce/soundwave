import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { User } from './user';
//port bcrypt from 'bcrypt';

interface TripAttributes {
  id: number;
  userId: number;
  destination: string;
  startDate: Date;
  endDate: Date;
  budget: number;
  //createdAt: Date;
}

interface TripCreationAttributes extends Optional<TripAttributes, 'id'> {}

export class Trip extends Model<TripAttributes, TripCreationAttributes> implements TripAttributes {
  public id!: number; // Note that the '!' exclamation mark denotes that this property will always be assigned a value by the time it's used.
  public userId!: number;
  public destination!: string;
  public startDate!: Date;
  public endDate!: Date;
  public budget!: number;
  //public createdAt!: Date;

    // associated User model
  public readonly tripuser?: User;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Hash the password before saving the user
//   public async setPassword(password: string) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(password, saltRounds);
//   }
}

export function TripFactory(sequelize: Sequelize): typeof Trip {
  Trip.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: 'Users', // Assuming the Users model is defined elsewhere
        //   key: 'id',
        //   onDelete: 'CASCADE',
        // }
      },
      destination: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      budget: {
        type: DataTypes.DECIMAL(10, 2),
      },
      // createdAt: {
      //   type: DataTypes.DATE,
      //   defaultValue: DataTypes.NOW,
      // },
    },
    {
      tableName: 'trips',
      sequelize,
      // hooks: {
      //   beforeCreate: async (trip: Trip) => {
      //     await user.setPassword(user.password);
      //   },
      //   beforeUpdate: async (user: User) => {
      //     await user.setPassword(user.password);
      //   },
      // }
    }
  );

  return Trip;
}
