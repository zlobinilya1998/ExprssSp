import { Product } from "./Product";

export enum OrderStatus {
    Create = 'created',
}

export type Order = {
    status: OrderStatus;
    id: number;
    totalAmount: number;
    product: Product;
    updatedAt: string;
    createdAt: string;
}