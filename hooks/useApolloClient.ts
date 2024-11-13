// import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  Observable,
} from "@apollo/client";
// import { getAccessToken } from "@/store";
import { onError } from "@apollo/client/link/error";
// import { RetryLink } from "apollo-link-retry";
import { RetryLink } from "@apollo/client/link/retry";

import AsyncStorage from "@react-native-async-storage/async-storage";
import GET_ACCESS_TOKEN from "@/db/mutations/getNewToken.js";

const httpLink = new HttpLink({ uri: `${process.env.EXPO_PUBLIC_SERVER_URL}` });

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: 10000,
    jitter: true,
  },
  attempts: {
    max: 2,
    retryIf: (error, _operation) => {
      return !!error && (error.statusCode === 503 || !!error.networkError);
    },
  },
});
const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      if (err.message === "Not Authorised!") {
        return new Observable((observer) => {
          refreshAccessToken()
            .then((newToken) => {
              // Update the headers with the new token
              operation.setContext(({ headers = {} }) => ({
                headers: {
                  ...headers,
                  authorization: `Bearer ${newToken}`,
                },
              }));
              // Retry the original operation with the new token
              forward(operation).subscribe(observer);
            })
            .catch((error) => {
              observer.error(error);
            });
        });
      }
    }
  }
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem("accessToken");
  // console.log(token)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
async function refreshAccessToken(): Promise<string> {
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
  const refreshToken = await AsyncStorage.getItem("refreshToken")
  // console.log(refreshToken)
  const { data } = await client.mutate({
    mutation: GET_ACCESS_TOKEN,
    variables: {
      refreshToken: refreshToken
    }
  });

  const newToken = data.getAccessToken;
  await AsyncStorage.setItem("accessToken", newToken);
  return newToken;
}
const client = new ApolloClient({
  // link: new HttpLink({
  //   uri: `${process.env.EXPO_PUBLIC_SERVER_URL}`,
  // }),
  link: from([retryLink,errorLink, authLink, httpLink]),

  cache: new InMemoryCache(),
});

export default client;
