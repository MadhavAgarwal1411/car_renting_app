
import { Stack, Tabs } from 'expo-router';


import 'react-native-reanimated';



// Prevent the splash screen from auto-hiding before asset loading is complete.


export default function RootLayout() {
 

  return (

      <Tabs initialRouteName='index' screenOptions={{
        tabBarActiveTintColor:"grey",
        tabBarInactiveTintColor:"black",
        tabBarShowLabel:false,
        tabBarStyle: { backgroundColor: 'black' },
        
      }}>
    
        <Tabs.Screen name="home" options={{ headerShown: false }} />
        <Tabs.Screen name="profile" options={{ headerShown: false }} />
       
    
      </Tabs>
 
  );
}
