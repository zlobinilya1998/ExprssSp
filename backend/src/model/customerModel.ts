import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '@/config';

interface CustomerAttributes {
  id: number;
  name: string;
  phone: string;
  email: string;
  isActivated: boolean;
}

interface CustomerCreationAttributes extends Optional<CustomerAttributes, 'id' | 'isActivated'> { }

class Customer extends Model<CustomerAttributes, CustomerCreationAttributes> implements CustomerAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public phone!: string;
  public isActivated!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}



Customer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActivated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  },
  {
    sequelize,
    modelName: 'Customer'
  }
)

export default Customer;