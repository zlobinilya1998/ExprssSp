import Order from "@/model/orderModel";

class OrderRepository {
    static async create({ totalAmount,productId }) {
        return Order.create({totalAmount,productId})
    }
}

export default OrderRepository;