import mysql from 'mysql2/promise';
import RepositoryAbstractFactory from '../infra/database/factory/RepositoryAbstractFactory.interface';
import RepositoryDatabaseFactory from '../infra/database/factory/RepositoryDatabaseFactory';
import { StandaloneServerContextFunctionArgument } from '@apollo/server/standalone';
import { globalConfig } from './../config/Global.conf';

export interface IContext {
    repositoryFactory: RepositoryAbstractFactory
}

export async function buildGraphQLContext(arg: StandaloneServerContextFunctionArgument): Promise<IContext> {
    const mysqlConnection = await mysql.createConnection(globalConfig.mysqlConfig);
   
    return {
        repositoryFactory: new RepositoryDatabaseFactory(mysqlConnection),
    }
}
