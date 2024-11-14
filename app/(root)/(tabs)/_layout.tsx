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
  // <View
  //   className={`flex flex-row justify-center items-center rounded-full ${
  //     focused ? "bg-general-300" : ""
  //   }`}
  // >
  //   <View
  //     className={`flex w-12 h-12 justify-center items-center rounded-full ${
  //       focused ? "bg-general-400" : ""
  //     }`}
  //   >
      <Image
        source={source}
        tintColor="white"
        resizeMode="contain"
        className="w-7 h-7"
      />
  //   </View>
  // </View>
);

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
  return (
    <Tabs
      initialRouteName="index"
      // backBehavior=""
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveBackgroundColor: "white",
        // tabBarInactiveBackgroundColor: "red",
        // tabBarAllowFontScaling: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#1E1E1E",
          opacity: 0.8,
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          position: "absolute",
          borderRadius: 10,
          marginHorizontal: 10,
          marginVertical: 5,
          overflow: "hidden",
          // paddingVertical: 10
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
          tabBarShowLabel: true,
          tabBarActiveTintColor: "white",
          tabBarActiveBackgroundColor: "#00000077",
          tabBarLabel: "home",
          tabBarLabelPosition: "below-icon",
          headerShown: false,
          tabBarAccessibilityLabel: "home",
          tabBarAllowFontScaling: false,
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
          tabBarAllowFontScaling: false,
          tabBarActiveBackgroundColor: "#00000077",
          tabBarAccessibilityLabel: "trip",
          tabBarLabelStyle: { color: "white" },
        }}
      />
      <Tabs.Screen
        name="rent"
        options={{
          title: "rent",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={Icons.rentIcon} />
          ),
          tabBarAllowFontScaling: false,
          tabBarAccessibilityLabel: "rent",
          tabBarActiveBackgroundColor: "#00000077",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={Icons.profileIcon} />
          ),
          tabBarAccessibilityLabel: "profile",
          tabBarActiveBackgroundColor: "#00000077",
          headerShown: false,
          tabBarAllowFontScaling: false,
          tabBarLabelStyle: { color: "white" },
        }}
      />
    </Tabs>
  );
}
