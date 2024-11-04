import express from 'express';
import { createProductDto } from '@/dto/product/ProductDto';
import { validate } from '@/middleware/ValidateDtoMiddleware';
import ProductRepository from '@/repository/customer/ProductRepository';
const router = express.Router();

// router.get('/', async (req, res, next) => {
//     const customers = await CustomerRepository.getAll();
//     res.send(customers)
// })

router.post('/', validate(createProductDto), async (req, res) => {
    const dto = req.body;
    const product = await ProductRepository.create(dto);
    res.send(product)
})

// router.delete("/all", async (req, res) => {
//     await CustomerRepository.deleteAll();
//     res.send({})
// })

// router.delete("/:id", async (req, res) => {
//     const { id } = req.params;
//     if (!id) throw new Error('No id was provided')
//     const customer = await CustomerRepository.delete(id);
//     res.send(customer)
// })



export default router;