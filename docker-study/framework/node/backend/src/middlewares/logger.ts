import { ICustomMiddleware } from './../models/custom-middleware.interface';
import { Request, Response, NextFunction } from 'express';

export class LoggerMiddleware implements ICustomMiddleware {
    handle = (req: Request, res: Response, next: NextFunction) => {
        this.logger(req, res);
        next();
    }

    private logger(req: Request, res: Response) {
        console.log(`${req.method} ${req.path}`);
    }
}
