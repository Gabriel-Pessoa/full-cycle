/**
 * Include all the query resolvers related to user.
 */
import { IContext } from './../../context/Context';

interface Args {
    userID: string;
}

export const UserQuery = {
    user: async (_: unknown, args: Args, ctx: IContext) => {
        const foundUser = await ctx.database.mysql.userRepository.getUser(args.userID);
        return foundUser;
    },
    users: async (_: unknown, __: Args, ctx: IContext) => {
        try {
            const users = await ctx.database.mysql.userRepository.getUsers();
            return users;
        } catch (error) {
            throw error;
        }
    }
}