export interface IUser {
    id: string;
    email: string;
    password: string;
    admin: boolean;
    created_at: Date;
}

export class User implements IUser {
    id: string;
    email: string;
    password: string;
    admin: boolean;
    created_at: Date;

    constructor(id: string, email: string, password: string, admin: boolean, createdAt: Date) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.admin = admin;
        this.created_at = createdAt;
    }
}
