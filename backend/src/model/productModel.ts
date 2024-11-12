import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '@/config';

export interface ProductAttributes {
  id: number;
  customerId: number;
  categoryId: number;
  name: string;
  price: number;
  description: string;
  stock: number;
}

export interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> { }

class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public price!: number;
  public description!: string;
  public stock!: number;
  public customerId!: number;
  public categoryId!: number;
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
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ProductCategories', 
        key: 'id',
      },
    }
  },
  {
    sequelize,
    modelName: 'Product',
  }
)



export default Product;