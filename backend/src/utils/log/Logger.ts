import fs from 'fs'
export class Logger {
    static access(req,data){
        console.log(`[${req.method}] ${req.originalUrl}`);
        // console.log("Response:", data);
        fs.appendFile('access-log.txt',`[${req.method}] ${req.originalUrl} IP:${req.ip}\n`,() => {})
    }
    static error(req,err){
        const method = `[${req.method}]`;
        const url = req.originalUrl;
        const stack = err.stack;
        fs.appendFile('error-log.txt',`${method} ${url}\n${stack}\n`, () => {})
    }
}