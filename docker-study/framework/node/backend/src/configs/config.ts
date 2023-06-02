import { env } from './dotenv.config';
import { MYSQLConfig } from './db.config';
import { stringToNumberWithDefault } from '../utils/converters.utils';

const defaultMysqlDBPort: number = 3306;

// Do not export this class
// Use config instance bellow sharing for all application
class Config {
    private _mysqlDB: MYSQLConfig = new MYSQLConfig(
        env.database.mysql.host,
        stringToNumberWithDefault(env.database.mysql.port, defaultMysqlDBPort),
        env.database.mysql.user,
        env.database.mysql.password,
        env.database.mysql.password,
    );

    private _apiKeyAuth: string = env.authentication.apiKey!; 

    validate(): boolean {
        return this._mysqlDB.validate();
    }

    public get mysqlDB() {
        return this._mysqlDB;
    }

    public get apiKeyAuth() {
        return this._apiKeyAuth;
    }
}

export const config = new Config();
config.validate();
