import joi from 'joi';

const createProductDto = joi.object({
    name: joi.string().min(3).max(100).required(),
    description: joi.string().min(3).max(300).required(),
    price: joi.number().min(100).max(10000).required(),
    stock: joi.number().min(0).required(),
    customerId: joi.number().required(),
});

export {
    createProductDto,
}