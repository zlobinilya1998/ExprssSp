import joi from 'joi';

const createOrderDto = joi.object({
    totalAmount: joi.number().required(),
    productId: joi.number().required(),
});

export {
    createOrderDto,
}