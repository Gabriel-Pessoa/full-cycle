import { ConnectionConfig } from "mysql";
import { isValidNumber, isValidString } from "../utils/validators.utils";


export class MYSQLConfig implements ConnectionConfig {
    host?: string;
    port?: number;
    user?: string;
    password?: string;
    database?: string;

    constructor(host?: string, port?: number, user?: string, password?: string, database?: string) {
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
        this.database = database;
    }

    validate(): boolean {
        return this.isValidHost() &&
            this.isValidPort() &&
            this.isValidUser() &&
            this.isValidPassword() &&
            this.isValidDatabase();
    }

    private isValidHost(): boolean {
        return isValidString(this.host);
    }

    private isValidPort(): boolean {
        return isValidNumber(this.host);
    }

    private isValidUser(): boolean {
        return isValidString(this.user);
    }

    private isValidPassword(): boolean {
        return isValidString(this.password);
    }

    private isValidDatabase(): boolean {
        return isValidString(this.database);
    }
}