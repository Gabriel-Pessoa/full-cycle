import { APIKeyAuthMiddleware } from './middlewares/api-key-auth';
import { LoggerMiddleware } from './middlewares/logger';
import { UserRepo } from './services/repository.service';
import express, { Request, Response } from 'express';
import { Database } from './services/db.service';
import { User, IUser } from './models/user.interface';
import { config } from './configs/config';

interface UserRequest<T> extends Request {
    body: T
}

const app = express();
const port = 3000;

// custom middlewares
const logger = new LoggerMiddleware();
app.use(logger.handle)

const apiKeyAuth = new APIKeyAuthMiddleware(config.apiKeyAuth);
app.use(apiKeyAuth.handle)


app.use(express.json());

app.get('/users/:id', (req: Request, res: Response) => {
    res.json({ message: 'Hello world with Typescript!' });
});

app.post('/users', (req: UserRequest<IUser>, res: Response) => {
    const mysql = Database.getInstance(config.mysqlDB);
    const userRepo = new UserRepo(mysql);

    const { email, password, admin } = req.body;
    const user = new User(email, password, admin);

    // mysql.close();

    try {
        userRepo.create(user);
    } catch (error) {
        return res.status(501);
    }

    res.status(201).json(user);
});

// listen
app.listen(port, () => `server running on port ${port}`);


