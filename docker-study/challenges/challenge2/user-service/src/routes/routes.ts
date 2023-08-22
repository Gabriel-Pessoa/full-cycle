import { Router } from 'express';
import { config } from './../configs/config';
import { Database } from '../services/db.service';
import { UserRepo } from '../services/repository.service';
import { GetUserController } from './../controllers/getUser.controller';
import { GetUsersController } from '../controllers/getUsers.controller';
import { CreateUserController } from '../controllers/createUser.controller';

// Dependecies
const mysql = Database.getInstance(config.mysqlDB);
const userRepo = new UserRepo(mysql);

/**
 * User endpoints
 */
const userRouter: Router = Router();

// get user by id endpoint
userRouter.get('/:id',
    (req, res) => new GetUserController(userRepo).execute(req, res),
);

// get all user endpoint
userRouter.get('',
    (req, res) => new GetUsersController(userRepo).execute(req, res),
);

// create user endpoint
userRouter.post('/:id',
    (req, res) => new CreateUserController(userRepo).execute(req, res),
);

export { userRouter }
