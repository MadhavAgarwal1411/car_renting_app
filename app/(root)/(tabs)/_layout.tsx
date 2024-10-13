
import { Icons } from '@/constants';
import { Stack, Tabs  } from 'expo-router';
import { View , Image} from 'react-native';
import { ImageSourcePropType } from'react-native';


import 'react-native-reanimated';

const TabIcon = ({
  focused,
  source,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View
    className={`flex flex-row justify-center items-center rounded-full ${focused ? "bg-general-300" : ""}`}
  >
    <View
      className={`flex w-12 h-12 justify-center items-center rounded-full ${focused ? "bg-general-400" : ""}`}
    >
      <Image source={source} tintColor = "white" resizeMode="contain" className="w-7 h-7" />
    </View>
  </View>
);


// Prevent the splash screen from auto-hiding before asset loading is complete.


export default function RootLayout() {
 

  return (

      <Tabs initialRouteName='index' screenOptions={{
        tabBarActiveTintColor:"grey",
        tabBarInactiveTintColor:"black",
        tabBarShowLabel:false,
        tabBarStyle: { backgroundColor: '#1E1E1E', 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center' , flexDirection:'row', position:'absolute', borderRadius:50, marginHorizontal:50 , marginVertical:20, overflow:"hidden",height:66, 
         },
        
      }}>
    
        <Tabs.Screen name="home" options={{ title:"home", tabBarIcon: ({focused})=>(
          <TabIcon focused={focused} source={Icons.homeIcon} />
        ), headerShown: false }} />
        <Tabs.Screen name="trip" options={{ title:"trip" , tabBarIcon: ({focused})=>(
          <TabIcon focused={focused} source={Icons.tripIcon} />
        ) ,headerShown: false }} />
        <Tabs.Screen name="rent" options={{ title:"rent" , tabBarIcon: ({focused})=>(
          <TabIcon focused={focused} source={Icons.rentIcon} />
        ) ,headerShown: false }} />
         <Tabs.Screen name="profile" options={{ title:"profile" , tabBarIcon: ({focused})=>(
          <TabIcon focused={focused} source={Icons.profileIcon} />
        ) ,headerShown: false }} />
       
       
    
      </Tabs>
 
  );
}
