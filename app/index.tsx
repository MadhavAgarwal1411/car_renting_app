import { Redirect } from "expo-router";
// import { ApolloProvider } from "@apollo/client";
// // import client from "@/apolloClient";
// import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const Home = () => {
  const IsSignedIn = false;

  if (IsSignedIn) {
    return (
        <Redirect href={"/(root)/(tabs)/rent"} />
    );
  }
  return (
      <Redirect href={"/(auth)/welcome"} />
  );
};

export default Home;
