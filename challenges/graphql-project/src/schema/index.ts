import { CommonTypes } from "./common";
import { UserTypes, UserQuery } from "./user";

export const typeDefs = /* GraphQL */ `  
    # Custom Scalars
    scalar Date
    
    type Query
    # type Mutation
    ${CommonTypes}
    ${UserTypes}
`;

export const resolvers = {
    Query: {
        ...UserQuery,
    }
}
