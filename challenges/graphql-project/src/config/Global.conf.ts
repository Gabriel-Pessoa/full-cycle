import { env } from './env.conf';
import { MYSQLConfig } from './db.conf';
import { stringToNumber } from '../utils/Converters.utils';

class GlobalConfig {
    private _mysqlConfig: MYSQLConfig = new MYSQLConfig(
        env.database.mysql.user,
        env.database.mysql.password,
        env.database.mysql.databaseName,
        env.database.mysql.host,
        stringToNumber(env.database.mysql.port),
    );

    private _appServerPort: number = stringToNumber(env.app.serverPort);

    validate() {
        this._mysqlConfig.validate();
        this.isValidAppServerPort();
    }

    public get mysqlConfig() {
        return this._mysqlConfig;
    }

    public get appServerPort() {
        return this._appServerPort;
    }

    private isValidAppServerPort() {
        const isValid = this._appServerPort > 0;
        if (!isValid) throw Error("app server port is not valid");
    }
}

export const globalConfig = new GlobalConfig();
globalConfig.validate();
