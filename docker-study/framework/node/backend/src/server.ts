import express from 'express';
import { Router, Request, Response } from 'express';

const app = express();
const route = Router();
const port = 3000;

app.use(express.json());

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello world with Typescript!' });
});

app.use(route);

app.listen(port, () => `server running on port ${port}`);
