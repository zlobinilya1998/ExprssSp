import { Logger } from "@/utils/log/Logger";

const defaultResultMiddleware = (req, res, next) => {
    const originalJson = res.json;
    res.json = async function (data) {
        if (data.error) {
            originalJson.call(this, data);
        } else {
            const resp = {
                isSuccess: true,
                data,
            }
            originalJson.call(this, resp);
        }
        Logger.access(req,data);
    };

    next();
}


export default defaultResultMiddleware;