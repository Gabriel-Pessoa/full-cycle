import { UserRepository } from "../repository/UserRepository.interface";

export default interface RepositoryAbstractFactory {
    createUserRepository(): UserRepository;
}
