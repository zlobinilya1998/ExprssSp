import Customer from "@/model/customerModel";
import Product from "@/model/productModel";
import Order from "@/model/orderModel";
import ProductCategory from "./productCategoryModel";

function defineAssociations() {
    Product.belongsTo(Customer, {
        foreignKey: 'customerId',
        as: 'customer',
    })
    Customer.hasMany(Product, {
        foreignKey: 'customerId',
        as: 'products',
    })
    Product.belongsTo(ProductCategory, {
        foreignKey: 'categoryId',
        as: 'category',
    })
    ProductCategory.hasMany(Product, {
        foreignKey: 'categoryId',
        as: 'category'
    })
    
    Order.belongsTo(Product, {
        foreignKey: 'productId',
        as: 'product',
    })

   
}


export {
    defineAssociations
}

