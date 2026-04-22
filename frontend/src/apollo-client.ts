import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const link = new HttpLink({
  uri: 'http://localhost:3000/graphql',
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});