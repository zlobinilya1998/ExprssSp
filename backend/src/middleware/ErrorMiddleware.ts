import { Logger } from '@/utils/log/Logger';
const errorMiddleware = (err, req, res, next) => {
    Logger.error(req, err)
    res.status(200).send({
        isSuccess: false,
        code: err.code || 500,
        error: err.message,
        details: err.cause || '',
    })
}



export default errorMiddleware;