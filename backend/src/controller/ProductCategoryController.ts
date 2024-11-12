import express from 'express';
import { createProductCategoryDto } from '@/dto/ProductCategoryDto';
import { validate } from '@/middleware/ValidateDtoMiddleware';
import { ProductCategoryService } from '@/services/ProductCategoryService';

const router = express.Router();

router.get('/', async (_, res) => {
    const products = await ProductCategoryService.getAll();
    res.send(products)
})

router.post('/', validate(createProductCategoryDto), async (req, res) => {
    const dto = req.body;
    const product = await ProductCategoryService.create(dto);
    res.send(product)
})

router.delete("/all", async (_, res) => {
    await ProductCategoryService.deleteAll();
    res.send({})
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    if (!id) throw new Error('No id was provided')
    const product = await ProductCategoryService.deleteById(id);
    res.send(product)
})



export default router;