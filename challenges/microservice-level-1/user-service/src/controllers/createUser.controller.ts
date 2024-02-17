import { v4 as uuidv4, validate as uuidValidate } from 'uuid';
import { Request, Response } from "express";
import { IUser, User } from "../models/user.interface";
import { IRepository } from "../services/repository.service";
import { BaseController } from "./base.controller";

export class CreateUserController extends BaseController {
    private userRepo: IRepository<IUser>;

    constructor(userRepo: IRepository<IUser>) {
        super();
        this.userRepo = userRepo;
    }

    protected async executeImpl(req: Request, res: Response): Promise<void | any> {
        try {
            const superUserID = req.params.id;
            const isValid = uuidValidate(superUserID);
            if (!isValid) {
                return this.badRequest(res, "Super user id is invalid");
            }

            const superUser = await this.userRepo.get(superUserID);
            // case not found
            if (!superUser.id) {
                return this.unauthorized(res, 'Not authorized. Only a user can create another');
            }

            const { email, password, admin } = req.body;
            const id = uuidv4();
            const createdAt = new Date();
            const userToCreate = new User(id, email, password, admin, createdAt);

            if (userToCreate.admin && !superUser.admin) {
                return this.unauthorized(res, 'Not authorized. Only a super user can create another');
            }

            await this.userRepo.create(userToCreate);

            return this.created<IUser>(res, userToCreate);

        } catch (error: any) {
            return this.fail(res, error);
        }
    }
}
