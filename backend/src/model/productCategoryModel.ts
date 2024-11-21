import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '@/config';

export interface ProductCategoryAttributes {
  id: number;
  name: string;
  description: string;
}

export interface ProductCategoryCreationAttributes extends Optional<ProductCategoryAttributes, 'id'> { }

class ProductCategory extends Model<ProductCategoryAttributes, ProductCategoryCreationAttributes> implements ProductCategoryAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ProductCategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'ProductCategory',
  }
)



export default ProductCategory;