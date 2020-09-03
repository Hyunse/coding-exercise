const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String!
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
    login(userInfo: UserInfo!): Boolean!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World',
  },
  Mutation: {
    login: () => true,
    register: () => ({
      errors: [
        {
          field: 'username',
          message: '505',
        },
      ],
      user: {
        id: 1,
        username: 'bob',
      },
    }),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`server started at ${url}`));
