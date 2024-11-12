import { Customer } from "@/models/Customer";

export class CustomerCreateDto
  implements Pick<Customer, "name" | "email" | "phone">
{
  email: string = "";
  name: string = "";
  phone: string = "";
  // productCategory: string | null = null;
}
