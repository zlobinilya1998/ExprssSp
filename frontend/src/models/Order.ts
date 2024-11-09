import { Product } from "./Product";

export enum OrderStatus {
    Created = 'created',
    Accepted = 'accepted',
    InWork = 'inWork',
    Completed = 'completed',
}

export type Order = {
    status: OrderStatus;
    id: number;
    totalAmount: number;
    product: Product;
    updatedAt: string;
    createdAt: string;
}