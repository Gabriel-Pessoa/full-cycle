import mysql from 'mysql2';
import { IDatabase } from './db.service';
import { IUser } from '../models/user.interface';

export interface IRepository<T> {
    create(resource: T): Promise<void>;
    get(id: string): Promise<T>;
    getAll(): Promise<T[]>;
}

export class UserRepo implements IRepository<IUser> {
    private database: IDatabase;

    constructor(database: IDatabase) {
        this.database = database;
    }

    get(id: string): Promise<IUser> {
        let sql = 'SELECT BIN_TO_UUID(id) AS id, email, password, admin, created_at FROM users WHERE id = UUID_TO_BIN(?)'
        sql = mysql.format(sql, [id]);

        return this.database.connection.promise().query(sql)
            .then(([value]: any) => {
                const [row] = value;

                const user: IUser = {
                    id: row.id,
                    email: row.email,
                    password: row.password,
                    admin: (row.admin == true),
                    created_at: row.created_at,
                };

                return user;
            });
    }

    create(user: IUser): Promise<void> {
        let sql = 'INSERT INTO users(id, email, password, admin, created_at) VALUES (UUID_TO_BIN(?), ?, ?, ?, ?)';
        const inserts = [user.id, user.email, user.password, user.admin, user.created_at];
        sql = mysql.format(sql, inserts);

        return this.database.connection.promise().query(sql).
            then();
    }

    getAll(): Promise<IUser[]> {
        const sql = 'SELECT BIN_TO_UUID(id) AS id, email, password, admin, created_at FROM users'

        return this.database.connection.promise().query(sql)
            .then(([values]: any) => {
                const users: IUser[] = [];

                values.forEach((value: IUser) => {
                    const user: IUser = {
                        id: value.id,
                        email: value.email,
                        password: value.password,
                        admin: (value.admin == true),
                        created_at: value.created_at,
                    };
                    users.push(user);
                });

                return users;
            });
    }
}
