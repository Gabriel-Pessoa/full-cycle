import { Request, Response } from 'express';

export abstract class BaseController {
    protected abstract executeImpl(req: Request, res: Response): Promise<void | any>;

    public async execute(req: Request, res: Response): Promise<void> {
        try {
            await this.executeImpl(req, res);
        } catch (err) {
            console.log(`[BaseController]: Uncaught controller error`);
            console.log(err);
            this.fail(res, 'An unexpected error occurred');
        }
    }

    public static jsonResponse(res: Response, code: number, message: string) {
        return res.status(code).json({ message });
    }

    public ok<T>(res: Response, dto?: T) {
        if (dto) {
            res.type('application/json');
            return res.status(200).json(dto);
        } else {
            return res.sendStatus(200);
        }
    }

    public created<T>(res: Response, dto?: T) {
        if (dto) {
            res.type('application/json');
            return res.status(201).json(dto);
        } else {
            return res.sendStatus(201);
        }
    }

    public badRequest(res: Response, message?: string) {
        return BaseController.jsonResponse(res, 400, message ? message : 'Bad request');
    }

    public unauthorized(res: Response, message?: string) {
        return BaseController.jsonResponse(res, 401, message ? message : 'Unauthorized');
    }

    public notFound(res: Response, message?: string) {
        return BaseController.jsonResponse(res, 404, message ? message : 'Not found');
    }

    public fail(res: Response, error: Error | string) {
        console.log(error);
        return res.status(500).json({
            message: error.toString(),
        });
    }
}
