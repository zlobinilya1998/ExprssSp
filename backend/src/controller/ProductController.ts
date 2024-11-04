import express from 'express';
import { createProductDto } from '@/dto/ProductDto';
import { validate } from '@/middleware/ValidateDtoMiddleware';
import { ProductService } from '@/services/ProductService';
const router = express.Router();

router.get('/', async (_, res) => {
    const products = await ProductService.getAll();
    res.send(products)
})

router.get('/customer/:id', async (req, res) => {
    const { id } = req.params;
    if (!id) throw new Error("No customer id was provided")
    const products = await ProductService.getByCustomerId(id);
    res.send(products)
})

router.post('/', validate(createProductDto), async (req, res) => {
    const dto = req.body;
    const product = await ProductService.create(dto);
    res.send(product)
})

router.delete("/all", async (_, res) => {
    await ProductService.deleteAll();
    res.send({})
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    if (!id) throw new Error('No id was provided')
    const product = await ProductService.deleteById(id);
    res.send(product)
})



export default router;