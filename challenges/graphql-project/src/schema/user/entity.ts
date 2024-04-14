export default class User {
    userID: string;
    userName: string;
    userDateOfBirth: Date;
    createdAt: Date;
    updatedAt?: Date;

    private constructor(userID: string, userName: string, userDateOfBirth: Date, createdAt: Date, updatedAt?: Date) {
        this.userID = userID;
        this.userName = userName;
        this.userDateOfBirth = userDateOfBirth;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static create(userID: string, userName: string, userDateOfBirth: Date): User {
        const createdAt = new Date();
        const newUser = new User(userID, userName, userDateOfBirth, createdAt)
        return newUser;
    }

    public static restore(userID: string, userName: string, userDateOfBirth: Date, createdAt: Date, updatedAt?: Date): User {
        return new User(userID, userName, userDateOfBirth, createdAt, updatedAt)
    }
}