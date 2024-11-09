import joi from 'joi';

const createOrderDto = joi.object({
    totalAmount: joi.number().required(),
    productId: joi.number().required(),
});

const updateOrderStatusDto = joi.object({
    id: joi.number().required(),
    status: joi.string().required(),
})

export {
    createOrderDto,
    updateOrderStatusDto
}