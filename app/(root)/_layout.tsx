import { Stack } from "expo-router";

import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
