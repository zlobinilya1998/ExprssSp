import express from 'express';
import { createOrderDto } from '@/dto/OrderDto';
import { validate } from '@/middleware/ValidateDtoMiddleware';
import OrderService from '@/services/OrderService';
import { OrderFacade } from '@/facade/OrderFacade';

const router = express.Router();

router.get('/', async (req, res) => {
    const orders = await OrderService.getAll();
    res.send(orders)
})

router.post('/', validate(createOrderDto), async (req, res) => {
    const dto = req.body;
    const order = await OrderFacade.createOrder(dto);
    res.send(order)
})

export default router;