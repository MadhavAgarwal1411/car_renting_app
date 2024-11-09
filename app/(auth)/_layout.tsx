import { Stack } from "expo-router";
import "react-native-reanimated";
import client from "@/hooks/useApolloClient";
import { ApolloProvider } from "@apollo/client";

export default function Layout() {
  return (
    <ApolloProvider client={client}>
      <Stack>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        {/* <Stack.Screen name="+not-found" /> */}
      </Stack>
    </ApolloProvider>
  );
}
