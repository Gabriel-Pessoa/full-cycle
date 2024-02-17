import mysql, { Connection, ConnectionOptions } from "mysql2";

export interface IDatabase {
    get connection(): Connection;
    close(): void;
}

export class Database implements IDatabase {
    private static instance: Database;
    private _connection: Connection;

    private constructor(config: ConnectionOptions) {
        this._connection = mysql.createConnection(config);
        this.connect(); // test of connection
    }

    public static getInstance(config: ConnectionOptions): Database {
        if (!Database.instance) {
            Database.instance = new Database(config);
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

    close(): void {
        this._connection.end((err) => {
            if (err) throw err;
        });
    }
}
