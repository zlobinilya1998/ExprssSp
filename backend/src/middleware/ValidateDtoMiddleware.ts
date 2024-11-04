const validate = schema => {
    const func = (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) throw new Error(error.details[0].message)
        next();
    }
    return func;
}

export {
    validate,
}