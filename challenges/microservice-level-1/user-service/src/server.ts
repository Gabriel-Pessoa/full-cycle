import express from 'express';
import { APIKeyAuthMiddleware } from './middlewares/apiKeyAuth';
import { LoggerMiddleware } from './middlewares/logger';
import { config } from './configs/config';
import { userRouter } from './routes/routes';

const app = express();
const port = config.appServerPort;

// custom middlewares
const logger = new LoggerMiddleware();
app.use(logger.handle)

const apiKeyAuth = new APIKeyAuthMiddleware(config.apiKeyAuth);
app.use(apiKeyAuth.handle)

app.use(express.json());

app.use('/users', userRouter);

// listen
app.listen(port, () => `server running on port ${port}`);
