import { Request, Response, NextFunction } from 'express';
import { ICustomMiddleware } from '../models/customMiddleware.interface';

export class LoggerMiddleware implements ICustomMiddleware {
    handle = (req: Request, res: Response, next: NextFunction) => {
        this.logger(req, res);
        next();
    }

    private logger(req: Request, res: Response) {
        console.log(`${req.method} ${req.path}`);
    }
}
