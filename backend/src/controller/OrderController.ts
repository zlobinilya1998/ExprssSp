import express from 'express';
import { createOrderDto, updateOrderStatusDto } from '@/dto/OrderDto';
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

router.put('/updateStatus', validate(updateOrderStatusDto), async (req, res) => {
    const dto = req.body;
    const order = await OrderService.updateStatus(dto);
    res.send(order)
})

export default router;