import mysql, { Connection, ConnectionConfig } from "mysql";

export interface IDatabase {
    get connection(): Connection;
    ping(): void;
    close(): void;
}

export class Database implements IDatabase {
    private static instance: Database;
    private _connection: Connection;

    private constructor(connectionConfig: ConnectionConfig) {
        this._connection = mysql.createConnection(connectionConfig);
        this.connect();
        this.ping(); // test of connection
    }

    public static getInstance(connectionConfig: ConnectionConfig): Database {
        if (!Database.instance) {
            Database.instance = new Database(connectionConfig);
        }

        return Database.instance;
    }

    public get connection(): Connection {
        return this._connection;
    }

    private connect(): void {
        this._connection.connect((err) => {
            if (err) throw err;
            console.log('mysql database is connected. thread id: ', this._connection.threadId);
        });
    }

    ping(): void {
        this._connection.ping((err) => {
            if (err) throw err;
            console.log('db connection is successful');
        });
    }

    close(): void {
        this._connection.end((err) => {
            if (err) throw err;
        });
    }
}
