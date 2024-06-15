import User from "../../../schema/user/entity";
import { UserRepository } from './UserRepository.interface';
import DatabaseConnection from "../Connection";
import { RowDataPacket } from 'mysql2';

export class UserDatabaseRepository implements UserRepository {
    private connection: DatabaseConnection;

    constructor(connection: DatabaseConnection) {
        this.connection = connection;
    }

    async get(userID: string): Promise<User> {
        const [rows] = await this.connection.execute<RowDataPacket[]>(
            'SELECT user_id, user_name, user_date_of_birth, created_at, updated_at FROM Users WHERE user_id = ?',
            [userID]
        );

        const [registry] = rows;
        if (!registry) {
            throw new Error('not found');
        }

        return User.restore(registry.user_id, registry.user_name, registry.user_date_of_birth, registry.created_at, registry.updated_at);
    }

    async list(): Promise<User[]> {
        const users: User[] = [];
        const [rows] = await this.connection.execute<RowDataPacket[]>(
            'SELECT user_id, user_name, user_date_of_birth, created_at, updated_at FROM Users'
        );
        rows.forEach(registry => {
            users.push(User.restore(registry.user_id, registry.user_name, registry.user_date_of_birth, registry.created_at, registry.updated_at));
        });
        return users;
    }
}
