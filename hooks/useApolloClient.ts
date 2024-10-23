import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.EXPO_PUBLIC_SERVER_URL}`,
  }),
  cache: new InMemoryCache(),
});

export default client;
