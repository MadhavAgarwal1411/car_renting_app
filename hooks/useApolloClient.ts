// import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  Observable,
} from "@apollo/client";
import { getAccessToken } from "@/store";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "apollo-link-retry";
import AsyncStorage from "@react-native-async-storage/async-storage";

const httpLink = new HttpLink({ uri: `${process.env.EXPO_PUBLIC_SERVER_URL}` });
async function refreshAccessToken() {
  // Replace with your actual refresh token API call
  const refreshToken = await AsyncStorage.getItem("refreshToken");
  const response = await fetch("https://your-api/refresh-token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  });

  const data = await response.json();
  const newToken = data.accessToken;
  await AsyncStorage.setItem("accessToken", newToken);
  return newToken;
}
const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      if (err.extensions?.code === "UNAUTHENTICATED") {
        return new Observable((observer) => {
          refreshAccessToken()
            .then((newToken) => {
              operation.setContext(({ headers = {} }) => ({
                headers: {
                  ...headers,
                  authorization: `Bearer ${newToken}`,
                },
              }));
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
  const token = await getAccessToken;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  // link: new HttpLink({
  //   uri: `${process.env.EXPO_PUBLIC_SERVER_URL}`,
  // }),
  link: from([authLink, errorLink, httpLink]),

  cache: new InMemoryCache(),
});

export default client;
