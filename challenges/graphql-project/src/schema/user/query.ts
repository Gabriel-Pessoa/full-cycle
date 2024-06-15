/**
 * Include all the query resolvers related to user.
 */

import { IContext } from './../../context/Context';

interface Args {
    userID: string;
}

export const UserQuery = {
    user: async (_: unknown, args: Args, ctx: IContext) => {
        const userDatabaseRepository = ctx.repositoryFactory.createUserRepository();
        const user = await userDatabaseRepository.get(args.userID);
        return user;
    },
    users: async (_: unknown, __: Args, ctx: IContext) => {
        const userDatabaseRepository = ctx.repositoryFactory.createUserRepository();
        const users = await userDatabaseRepository.list();
        return users;
    }
}
