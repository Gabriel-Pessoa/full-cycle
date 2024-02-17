import { env } from './env.conf';
import { MYSQLConfig } from './db.conf';
import { stringToNumber } from '../src/utils/Converters.utils';


class GlobalConfig {
    private _database: MYSQLConfig = new MYSQLConfig(
        env.database.mysql.user,
        env.database.mysql.password,
        env.database.mysql.databaseName,
        env.database.mysql.host,
        stringToNumber(env.database.mysql.port),
    );
    
    private _appServerPort: number = stringToNumber(env.app.serverPort);

    validate(): boolean {
        return this._database.validate();
    }

    public get database() {
        return this._database;
    }

    public get appServerPort() {
        return this._appServerPort;
    }
}

export const globalConfig = new GlobalConfig();
globalConfig.validate();
