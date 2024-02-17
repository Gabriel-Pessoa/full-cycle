import { env } from './dotenv.config';
import { MYSQLConfig } from './db.config';
import { stringToNumber } from '../utils/converters.utils';

// Do not export this class
// Use config instance bellow sharing for all application
class Config {
    private _mysqlDB: MYSQLConfig = new MYSQLConfig(
        env.database.mysql.user,
        env.database.mysql.password,
        env.database.mysql.database,
        env.database.mysql.host,
        stringToNumber(env.database.mysql.port),
    );
    
    // TODO: turn to authentication service
    private _apiKeyAuth: string = env.authentication.apiKey!;
    
    private _appServerPort: number = stringToNumber(env.app.serverPort);

    validate(): boolean {
        return this._mysqlDB.validate();
    }

    public get mysqlDB() {
        return this._mysqlDB;
    }

    public get apiKeyAuth() {
        return this._apiKeyAuth;
    }

    public get appServerPort() {
        return this._appServerPort;
    }
}

export const config = new Config();
config.validate();
