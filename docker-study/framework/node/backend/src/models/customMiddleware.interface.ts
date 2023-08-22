import { Request, Response, NextFunction } from 'express';

export interface ICustomMiddleware {
    handle: (req: Request, res: Response, next: NextFunction) => void;
}
