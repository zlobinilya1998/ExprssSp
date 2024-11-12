import Customer from "@/model/customerModel";
import Product from "@/model/productModel";
class CustomerRepository {
    static async create({ name, phone, email }) {
        const customer = await Customer.create({
            name,
            phone,
            email,
        })
        return customer;
    }
    static async delete(id) {
        return await Customer.destroy({
            where: { id }
        })
    }
    static async getAll() {
        return Customer.findAll({
            include: {
                model: Product,
                as: 'products',
                attributes: {
                    exclude: ['customerId']
                }
            }
        });
    }

    static async getByEmail(email: string) {
        return Customer.findOne({
            where: {
                email
            }
        })
    }

    static async getById(id) {
        return Customer.findByPk(id);
    }

    static async deleteAll() {
        return Customer.destroy({ truncate: true });
    }


}

export default CustomerRepository;