import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '@/config';
import Customer from 'model/customerModel';

interface ProductAttributes {
  id: number;
  customerId: number;
  name: string;
  price: number;
  description: string;
  stock: number;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> { }

class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public price!: number;
  public description!: string;
  public stock!: number;
  public customerId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init(
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
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    customerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Customers', 
        key: 'id'
      }
    }
  },
  {
    sequelize,
    modelName: 'Product',
  }
)


Product.belongsTo(Customer, {
  foreignKey: 'customerId',
})


export default Product;