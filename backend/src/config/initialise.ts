import {ApolloServer} from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';
import express from 'express';

const app = express();

const PORT = process.env.PORT || 8000;

const initaliseServer = async () => {
  const gqlServer = new ApolloServer({
    typeDefs: `
      type Query {
        hello: String
        say(name:String): String
      }
    `,
    resolvers: {
      Query: {
        hello: () => 'Hello from GraphQL!',
        say: (_, {name}: {name: String}) => `Hello, ${name}!`,
      },
    },
  });

  // app.get('/', (req: Request, res: Response, next: NextFunction) => {
  //   res.send('ok');
  // });
  await gqlServer.start();
  app.use(express.json());
  app.use('/graphql', expressMiddleware(gqlServer));

  app.listen(8000, () => {
    console.log(`Running on ${PORT}`);
  });
};

export {initaliseServer};
