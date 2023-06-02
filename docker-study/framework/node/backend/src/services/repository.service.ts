import mysql from 'mysql';
import { IDatabase } from './db.service';
import {  IUser } from '../models/user.interface';

interface IRepository<T> {
    create: (resource: T) => T;
    // get: (id: number) => T;
    // getAll(): IUser[]
}

export class UserRepo implements IRepository<IUser> {
    private database: IDatabase;

    constructor(database: IDatabase) {
        this.database = database;
    }

    create(user: IUser): IUser {
        let sql = 'INSERT INTO users(email, password, admin) VALUES (?, ?, ?)';
        const inserts = [user.email, user.password, user.admin];
        sql = mysql.format(sql, inserts);

        const query = this.database.connection.query(sql,
            (error, results) => {
                if (error) throw error;

                user.id = results.insertId;
            });

        return user;
    }

    // createAssinc(user: IUser): Promise<IUser> {
    //     let sql = 'INSERT INTO users (email, password, admin) VALUES(?,?,?)';
    //     const inserts = [user.email, user.password, user.admin];
    //     sql = mysql.format(sql, inserts);

    //     return new Promise((resolve, reject) => {
    //         this.database.connection.query(sql,
    //             (error, results, fields) => {
    //                 if (error) reject(error);
    //                 resolve(results)
    //             });
    //     });
    // }


    // get(id: number): IUser {
    //     let result: IUser;

    //     const userID = this.database.connection.escape(id);
    //     const sql = `SELECT * FROM users WHERE id=` + userID;

    //     const query = this.database.connection.query(sql, (error, results, fields) => {
    //        if (error) throw error;
    //     });

    //     // return query.stream().pipe<>(User)
    // }
}