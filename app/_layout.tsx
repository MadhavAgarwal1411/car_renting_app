import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    LeagueSpartanBlack: require('../assets/fonts/static/LeagueSpartan-Black.ttf'),
    LeagueSpartanBold: require('../assets/fonts/static/LeagueSpartan-Bold.ttf'),
    LeagueSpartanExtraBold: require('../assets/fonts/static/LeagueSpartan-ExtraBold.ttf'),
    LeagueSpartanExtraLight: require('../assets/fonts/static/LeagueSpartan-ExtraLight.ttf'),
    LeagueSpartanLight: require('../assets/fonts/static/LeagueSpartan-Light.ttf'),
    LeagueSpartanMedium: require('../assets/fonts/static/LeagueSpartan-Medium.ttf'),
    LeagueSpartanRegular: require('../assets/fonts/static/LeagueSpartan-Regular.ttf'),
    LeagueSpartanSemiBold: require('../assets/fonts/static/LeagueSpartan-SemiBold.ttf'),
    LeagueSpartanThin: require('../assets/fonts/static/LeagueSpartan-Thin.ttf'),

  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (

      <Stack>
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
 
  );
}
