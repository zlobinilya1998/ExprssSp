import Customer from "@/model/customerModel";
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
        return Customer.findAll();
    }

    static async getById(id) {
        return Customer.findByPk(id);
    }

    static async deleteAll() {
        return Customer.destroy({ truncate: true });
    }

    
}

export default CustomerRepository;