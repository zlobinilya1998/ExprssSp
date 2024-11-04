import express from 'express';
import { createCustomerDto } from '@/dto/CustomerDto';
import { validate } from '@/middleware/ValidateDtoMiddleware';
import { CustomerFacade } from '@/facade/CustomerFacade';
import CustomerRepository from '@/repository/customer/CustomerRepository';

const router = express.Router();

router.get('/', async (req, res, next) => {
    const customers = await CustomerRepository.getAll();
    res.send(customers)
})

router.post('/', validate(createCustomerDto), async (req, res) => {
    const dto = req.body;
    const customer = await CustomerFacade.createCustomer(dto);
    res.send(customer)
})

router.delete("/all", async (req,res) => {
    await CustomerRepository.deleteAll();
    res.send({})
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    if (!id) throw new Error('No id was provided')
    const customer = await CustomerRepository.delete(id);
    res.send(customer)
})



export default router;