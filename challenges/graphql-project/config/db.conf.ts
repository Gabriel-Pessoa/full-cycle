import { ConnectionOptions } from 'mysql2';
import { isValidString, isValidNumber } from '../src/utils/Validators.utils';

const defaultDBPort: number = 3306;

export class MYSQLConfig implements ConnectionOptions {
    user?: string;
    password?: string;
    databaseName?: string;
    host?: string;
    port?: number;

    constructor(user?: string, password?: string, databaseName?: string, host?: string, port: number = defaultDBPort) {
        this.user = user;
        this.password = password;
        this.databaseName = databaseName;
        this.host = host;
        this.port = port;
    }
    
    validate(): boolean {
        return this.isValidHost() &&
            this.isValidPort() &&
            this.isValidUser() &&
            this.isValidPassword() &&
            this.isValidDatabaseName();
    }

    private isValidHost(): boolean {
        return isValidString(this.host);
    }

    private isValidPort(): boolean {
        return isValidNumber(this.port);
    }

    private isValidUser(): boolean {
        return isValidString(this.user);
    }

    private isValidPassword(): boolean {
        return isValidString(this.password);
    }

    private isValidDatabaseName(): boolean {
        return isValidString(this.databaseName);
    }
}