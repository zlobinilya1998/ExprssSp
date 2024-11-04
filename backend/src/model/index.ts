import Customer from "model/customerModel";
import Product from "model/productModel";

function defineAssociations() {
    Product.belongsTo(Customer, {
        foreignKey: 'customerId',
        as: 'customer',
    })

    Customer.hasMany(Product, {
        foreignKey: 'customerId',
        as: 'product',
    })
}


export {
    defineAssociations
}

