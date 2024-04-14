import { Database } from '../database/types';
import { globalConfig } from '../config/Global.conf';
import { UserRepository } from "../database/userRepository";
import { createConnection } from "mysql2";
import { StandaloneServerContextFunctionArgument } from '@apollo/server/standalone';

export interface IContext {
    database: Database;
}

const mysqlConnection = createConnection(globalConfig.mysqlConfig);

export async function buildGraphQLContext(arg: StandaloneServerContextFunctionArgument): Promise<IContext> {
    return {
        database: {
            mysql: {
                userRepository: new UserRepository(mysqlConnection),
            },
        },
    }
}
