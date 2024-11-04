export type ProductCustomer = {
    name: string;
    id: string;
}

export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    stock: number;
    customer: ProductCustomer;
    createdAt: Date;
    updatedAt: Date;
}