import { IUserRepository } from './userRepository';

interface MYSQL {
    userRepository: IUserRepository;
}

export interface Database {
    mysql: MYSQL;
}
