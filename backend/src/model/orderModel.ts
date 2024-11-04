import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '@/config';

enum OrderStatus {
    created = 'created',
    accepted = 'accepted',
    inWork = 'inWork',
    completed = 'completed',
}

interface OrderAttributes {
    id: number;
    totalAmount: number;
    status: OrderStatus;
    productId: number;
}

interface OrderCreationAttributes extends Optional<OrderAttributes, 'id' | 'status'> { }

class Order extends Model<OrderAttributes, OrderCreationAttributes> implements OrderAttributes {
    public id!: number;
    public totalAmount!: number;
    public status!: OrderStatus;
    public productId!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
Order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        productId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Products',
                key: 'id'
            }
        },
        totalAmount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: OrderStatus.created,
        },
    },
    {
        sequelize,
        modelName: 'Order'
    }
)

export default Order;