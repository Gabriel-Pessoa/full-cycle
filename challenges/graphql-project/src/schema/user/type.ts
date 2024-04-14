/**
 * Include all the GraphQL types, queries and mutations related to the user.
 */
export const UserTypes = /* GraphQL */ `
    type User implements Timestamps {
        userID: ID
        userName: String
        userDateOfBirth: Date

        # Interface required
        createdAt: Date!
        updatedAt: Date
    }
    
    extend type Query {
        users: [User]
        user(userID: ID!): User
    }
`;