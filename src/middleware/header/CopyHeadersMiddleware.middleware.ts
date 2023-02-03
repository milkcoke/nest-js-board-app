import {BadRequestException, NestMiddleware} from "@nestjs/common";
import {Request, Response, NextFunction} from "express";

export class CopyHeadersMiddlewareMiddleware implements NestMiddleware {
    private readonly commandHeaderSet = new Set<string>([
            "x-request-date",
            "id",
    ]);

    use(req: Request, res: Response, next: NextFunction) {
        const headers = req.headers;

        Object.entries(headers).forEach(([key, value])=>{
            if(this.commandHeaderSet.has(key)) {
                res.setHeader(key, value);
            };
        });

        res.setHeader('x-request-response', new Date().toISOString());


        if (!req.headers["id"] || req.headers["id"] != "1") {
            throw new BadRequestException(`id is not allowed`)
        }

        next();
    }
}
