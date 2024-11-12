import joi from 'joi';

const createProductCategoryDto = joi.object({
    name: joi.string().min(3).max(100).required(),
    description: joi.string().min(3).max(300).required(),
});

export {
    createProductCategoryDto,
}