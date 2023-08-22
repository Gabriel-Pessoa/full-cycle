import { Request, Response } from "express";
import { IUser } from "../models/user.interface";
import { IRepository } from "../services/repository.service";
import { BaseController } from "./base.controller";

export class GetUsersController extends BaseController {
    private userRepo: IRepository<IUser>;

    constructor(userRepo: IRepository<IUser>) {
        super();
        this.userRepo = userRepo;
    }

    protected async executeImpl(req: Request, res: Response): Promise<void | any> {
        try {
            const users = await this.userRepo.getAll();
            return this.ok<IUser[]>(res, users);

        } catch (error: any) {
            return this.fail(res, error);
        }
    }
}