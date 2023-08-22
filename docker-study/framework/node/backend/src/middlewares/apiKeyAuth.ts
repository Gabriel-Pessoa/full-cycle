import { Request, Response, NextFunction } from 'express';
import { ICustomMiddleware } from '../models/customMiddleware.interface';

const X_API_KEY: string = 'X-API-KEY'.toLowerCase();

export class APIKeyAuthMiddleware implements ICustomMiddleware {
    private apiKey: string;
    handle = (req: Request, res: Response, next: NextFunction) => {
        this.auth(req, res, next)
    }

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    private auth(req: Request, res: Response, next: NextFunction) {
        const authHeaderValue = req.headers[X_API_KEY];
        if (authHeaderValue && authHeaderValue === this.apiKey) {
            return next();
        }

        return res.status(403).json({ error: 'credentials error!' });
    }
}
