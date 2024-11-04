import express from 'express';
import { createCustomerDto } from '@/dto/CustomerDto';
import { validate } from '@/middleware/ValidateDtoMiddleware';
import { CustomerFacade } from '@/facade/CustomerFacade';
import { CustomerService } from 'services/CustomerService';
import { promises as fs } from 'fs';
import path from 'path';

const router = express.Router();

router.get('/', async (_, res) => {
    const customers = await CustomerService.getAll();
    res.send(customers)
})

router.get('/activate?:id', async (req, res) => {
    const { id } = req.query;
    if (!id) throw new Error("No id was provided")
    await CustomerService.activateCustomer(id);
    const htmlPath = path.resolve(`src/emails/customer_activated.html`);
    const htmlTemplate = await fs.readFile(htmlPath, 'utf-8');
    res.send(htmlTemplate);
})

router.post('/', validate(createCustomerDto), async (req, res) => {
    const dto = req.body;
    const customer = await CustomerFacade.createCustomer(dto);
    res.send(customer)
})

router.delete("/all", async (_, res) => {
    await CustomerService.deleteAll();
    res.send({})
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    if (!id) throw new Error('No id was provided')
    const customer = await CustomerService.deleteById(id);
    res.send(customer)
})



export default router;