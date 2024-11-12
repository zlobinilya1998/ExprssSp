import { Product } from "@/models/Product";

export type Customer = {
    id: number;
    name: string;
    phone: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    products: Product[];
}