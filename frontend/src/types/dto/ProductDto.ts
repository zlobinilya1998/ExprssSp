export class ProductCreateDto {
    name: string = '';
    description: string = '';
    customerId: number | null = null;
    price: number | null = null;
    stock: number | null = null;
}