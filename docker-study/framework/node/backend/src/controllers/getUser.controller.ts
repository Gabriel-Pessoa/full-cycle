import { validate as uuidValidate } from 'uuid';
import { Request, Response } from "express";
import { IUser } from "../models/user.interface";
import { IRepository } from "../services/repository.service";
import { BaseController } from "./base.controller";

export class GetUserController extends BaseController {
    private userRepo: IRepository<IUser>;

    constructor(userRepo: IRepository<IUser>) {
        super();
        this.userRepo = userRepo;
    }

    protected async executeImpl(req: Request, res: Response): Promise<void | any> {
        try {
            const userID = req.params.id;
            const isValid = uuidValidate(userID);
            if (!isValid) {
                return this.badRequest(res, "user id is invalid");
            }

            const user = await this.userRepo.get(userID);
            return this.ok<IUser>(res, user);

        } catch (error: any) {
            return this.fail(res, error);
        }
    }
}
