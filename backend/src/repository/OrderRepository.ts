import Order, { OrderStatus } from "@/model/orderModel";
import Product from "@/model/productModel";

class OrderRepository {
    static async getAll() {
        return Order.findAll({
            attributes: {
                exclude: ['productId']
            },
            include: [{
                model: Product,
                as: 'product',
                attributes: {
                    exclude: ['stock']
                }
            }],
            order: [['createdAt', 'DESC']]
        });
    }
    static async create({ totalAmount, productId }) {
        return Order.create({ totalAmount, productId })
    }

    static async updateStatus({ id, status }) {
        const order = await Order.findByPk(id);
        if (!order) throw new Error('Заказ не найден')
        order.set({
            status
        });
        await order.save();
        return order;
    }
}

export default OrderRepository;