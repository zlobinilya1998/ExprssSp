import express from 'express';
import { createProductDto } from '@/dto/product/ProductDto';
import { validate } from '@/middleware/ValidateDtoMiddleware';
import ProductRepository from '@/repository/customer/ProductRepository';
const router = express.Router();

router.get('/', async (req, res, next) => {
    const products = await ProductRepository.getAll();
    res.send(products)
})

router.get('/customer/:id', async (req, res, next) => {
    const { id } = req.params;
    if (!id) throw new Error("No customer id was provided")
    const products = await ProductRepository.getByCustomer(id);
    res.send(products)
})

router.post('/', validate(createProductDto), async (req, res) => {
    const dto = req.body;
    const product = await ProductRepository.create(dto);
    res.send(product)
})

router.delete("/all", async (req, res) => {
    await ProductRepository.deleteAll();
    res.send({})
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    if (!id) throw new Error('No id was provided')
    const product = await ProductRepository.delete(id);
    res.send(product)
})



export default router;