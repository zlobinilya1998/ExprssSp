import Order from "@/model/orderModel";
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
        });
    }
    static async create({ totalAmount,productId }) {
        return Order.create({totalAmount,productId})
    }
}

export default OrderRepository;