const { ApolloServer, gql, PubSub } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello(name: String): String!
  }

  type User {
    id: ID!
    username: String!
  }

  type Error {
    field: String!
    message: String!
  }

  input UserInfo {
    username: String!
    password: String!
    age: Int
  }
  type RegisterResponse {
    user: User
    errors: [Error]
  }

  type Mutation {
    register(userInfo: UserInfo!): RegisterResponse!
    login(userInfo: UserInfo!): String!
  }

  type Subscription {
    newUser: User!
  }
`;

const NEW_USER = 'NEW_USER';

const resolvers = {
  Query: {
    hello: (parent, { name }) => {
      return `Hello ${name}`;
    },
  },
  Mutation: {
    login: (parent, { userInfo }, context, info) => {
      return userInfo.username;
    },
    register: (_, { userInfo: { username } }, { pubsub }) => {
      const user = {
        id: 1,
        username,
      };

      pubsub.publish(NEW_USER, {
        newUser: user,
      });

      return {
        errors: [
          {
            field: 'username',
            message: '505',
          },
        ],
        user
      };
    },
  },
  Subscription: {
    newUser: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(NEW_USER),
    },
  },
};

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res, pubsub }),
});

server.listen().then(({ url }) => console.log(`server started at ${url}`));
