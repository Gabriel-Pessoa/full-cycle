import { buildGraphQLContext, IContext } from './context/Context';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { globalConfig } from './config/Global.conf';
import { typeDefs, resolvers } from './schema'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

async function main() {
  const server = new ApolloServer<IContext>({ schema });

  const { url } = await startStandaloneServer(server, {
    context: buildGraphQLContext,
    listen: { port: globalConfig.appServerPort },
  });

  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

main();
