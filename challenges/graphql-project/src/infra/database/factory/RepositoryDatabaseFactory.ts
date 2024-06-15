import DatabaseConnection from '../Connection';
import RepositoryAbstractFactory from "./RepositoryAbstractFactory.interface";
import { UserDatabaseRepository } from './../repository/UserDatabaseRepository';
import { UserRepository } from "../repository/UserRepository.interface";

export default class RepositoryDatabaseFactory implements RepositoryAbstractFactory {
    private databaseConnection: DatabaseConnection;

    constructor(databaseConnection: DatabaseConnection) {
        this.databaseConnection = databaseConnection;
    }

    createUserRepository(): UserRepository {
        return new UserDatabaseRepository(this.databaseConnection);
    }
}
