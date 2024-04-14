import { Connection } from 'mysql2';
import User from "../schema/user/entity";

export interface IUserRepository {
    getUser(userID: string): Promise<User>;
    getUsers(): Promise<User[]>;
}

/**
 * Data Set mock
 */
const userList: User[] = [
    {
        userID: '1',
        userName: 'Jane Doe',
        userDateOfBirth: new Date('1980-06-20'),
        createdAt: new Date(),

    },
    {
        userID: '2',
        userName: 'Joe Doe',
        userDateOfBirth: new Date('1986-09-15'),
        createdAt: new Date(),
    },
    {
        userID: '3',
        userName: 'Peter Parker',
        userDateOfBirth: new Date('2001-08-10'),
        createdAt: new Date(),
    }
];

export class UserRepository implements IUserRepository {
    private mysqlConnection: Connection;

    constructor(mysqlConnection: Connection) {
        this.mysqlConnection = mysqlConnection;
    }

    getUser(userID: string): Promise<User> {
        return new Promise((resolve, reject) => {
            const user = userList.find(user => user.userID.toString() === userID);
            if (user) {
                const result = User.restore(user.userID, user.userName, user.userDateOfBirth, user.createdAt, user.updatedAt);
                resolve(result);
            } else {
                reject(new Error('not found'));
            }
        });
    }

    getUsers(): Promise<User[]> {
        return new Promise((resolve) => {
            const result: User[] = [];
            userList.forEach(item => {
                result.push(User.restore(item.userID, item.userName, item.userDateOfBirth, item.createdAt, item.updatedAt));
            });
            resolve(result);
        });
    }
}


