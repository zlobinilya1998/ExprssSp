import joi from 'joi';

const createCustomerDto = joi.object({
    name: joi.string().min(3).max(30).required(),
    phone: joi.string().min(8).required(),
    email: joi.string().email().required(),
});

export {
    createCustomerDto,
}