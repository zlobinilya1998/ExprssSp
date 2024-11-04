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
        const deleted = await Customer.destroy({
            where: { id }
        })
        if (deleted) return;
        return new Error('Ошибка при удалении')
    }
    static async getAll() {
        return Customer.findAll();
    }

    static async deleteAll() {
        return Customer.destroy({ truncate: true });
    }
}

export default CustomerRepository;