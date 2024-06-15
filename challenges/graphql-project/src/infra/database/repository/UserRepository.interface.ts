import User from "../../../schema/user/entity";

export interface UserRepository {
    get(userID: string): Promise<User>;
    list(): Promise<User[]>;
}
