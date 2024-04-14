import { ConnectionOptions } from 'mysql2';
import { isValidString, isValidNumber } from '../utils/Validators.utils';

const defaultDBPort: number = 3306;

export class MYSQLConfig implements ConnectionOptions {
    user?: string;
    password?: string;
    database?: string;
    host?: string;
    port?: number;

    constructor(user?: string, password?: string, databaseName?: string, host?: string, port: number = defaultDBPort) {
        this.user = user;
        this.password = password;
        this.database = databaseName;
        this.host = host;
        this.port = port;
    }

    validate() {
        this.isValidHost();
        this.isValidPort();
        this.isValidUser();
        this.isValidPassword();
        this.isValidDatabaseName();
    }

    private isValidHost() {
        const isValid = isValidString(this.host);
        if (!isValid) throw Error("mysql host is not valid");
    }

    private isValidPort() {
        const isValid = isValidNumber(this.port);
        if (!isValid) throw Error("mysql port is not valid");
    }

    private isValidUser() {
        const isValid =  isValidString(this.user);
        if (!isValid) throw Error("mysql user is not valid");
    }

    private isValidPassword() {
        const isValid = isValidString(this.password);
        if (!isValid) throw Error("mysql password is not valid");
    }

    private isValidDatabaseName() {
        const isValid = isValidString(this.database);
        if (!isValid) throw Error("mysql database name is not valid");
    }
}