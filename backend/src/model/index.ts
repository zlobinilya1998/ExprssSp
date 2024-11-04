import Customer from "model/customerModel";
import Product from "model/productModel";
import Order from "./orderModel";

function defineAssociations() {
    Product.belongsTo(Customer, {
        foreignKey: 'customerId',
        as: 'customer',
    })
    Order.belongsTo(Product, {
        foreignKey: 'id',
        as: 'order',
    })
    Customer.hasMany(Product, {
        foreignKey: 'customerId',
        as: 'product',
    })
}


export {
    defineAssociations
}

