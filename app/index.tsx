import { useUser } from "@/hooks/useUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { TextInputProps, TextProps, TouchableOpacityProps } from "react-native";
// import { ApolloProvider } from "@apollo/client";
// // import client from "@/apolloClient";
// import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";



const Home =  () => {
  const { user } = useUser();
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // console.log(user)
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const accessToken = await AsyncStorage.getItem("accessToken");
        setToken(accessToken);
        //  await AsyncStorage.removeItem("accessToken");
      } catch (error) {
        console.error("Error fetching token:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchToken();
  }, []);

  if (isLoading) return (
    <View className="w-full h-screen flex justify-center items-center">
      <ActivityIndicator size="large" />
    </View>
  );
  return (user || token) ? (
    <Redirect href={"/(root)/(tabs)/home"} />
  ) : (
    <Redirect href={"/(auth)/welcome"} />
  );
};

export default Home;
