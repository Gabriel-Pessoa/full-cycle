export interface IUser {
    id?: number;
    email: string;
    password: string;
    admin: boolean;
    created_at?: Date;
}

export class User implements IUser {
    id?: number;
    email: string;
    password: string;
    admin: boolean;
    created_at?: Date;

    constructor(email: string, password: string, admin: boolean) {
        this.email = email;
        this.password = password;
        this.admin = admin;
    }
}