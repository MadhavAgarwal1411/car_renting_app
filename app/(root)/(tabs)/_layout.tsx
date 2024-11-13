import { Icons } from "@/constants";
import { Tabs } from "expo-router";
import { View, Image } from "react-native";
import { ImageSourcePropType } from "react-native";

import "react-native-reanimated";

const TabIcon = ({
  focused,
  source,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View
    className={`flex flex-row justify-center items-center rounded-full ${
      focused ? "bg-general-300" : ""
    }`}
  >
    <View
      className={`flex w-12 h-12 justify-center items-center rounded-full ${
        focused ? "bg-general-400" : ""
      }`}
    >
      <Image
        source={source}
        tintColor="white"
        resizeMode="contain"
        className="w-7 h-7"
      />
    </View>
  </View>
);

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveBackgroundColor: "white",
        tabBarInactiveBackgroundColor: "red",
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#1E1E1E",
          opacity: 0.8,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
          borderRadius: 10,
          marginHorizontal: 10,
          marginVertical: 5,
          overflow: "hidden",
          height: 66,
          paddingRight: 20,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "home",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={Icons.homeIcon} />
          ),
          headerShown: false,
          tabBarBadge: "home",
          tabBarLabelStyle: { color: "white" },
          tabBarBadgeStyle: { color: "white", backgroundColor: "black" },
          lazy: true,
        }}
      />
      <Tabs.Screen
        name="trip"
        options={{
          title: "trip",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={Icons.tripIcon} />
          ),
          headerShown: false,
          tabBarBadge: "trip",
          tabBarLabelStyle: { color: "white" },
          tabBarBadgeStyle: { color: "white", backgroundColor: "black" },
        }}
      />
      <Tabs.Screen
        name="rent"
        options={{
          title: "rent",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={Icons.rentIcon} />
          ),
          headerShown: false,
          tabBarBadge: "rent",
          tabBarLabelStyle: { color: "white" },
          tabBarBadgeStyle: { color: "white", backgroundColor: "black" },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={Icons.profileIcon} />
          ),
          headerShown: false,
          tabBarBadge: "profile",
          tabBarLabelStyle: { color: "white" },
          tabBarBadgeStyle: { color: "white", backgroundColor: "black" },
        }}
      />
    </Tabs>
  );
}
