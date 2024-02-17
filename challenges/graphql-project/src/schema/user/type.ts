/**
 * Include all the GraphQL types, queries and mutations related to the user.
 */
export const UserTypes = `
    type User {
        id: ID
        name: String
        birthday: Date!
        createdAt: Date!
        updatedAt: Date
    }

`