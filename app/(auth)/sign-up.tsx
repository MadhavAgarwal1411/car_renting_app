import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { Icons } from "@/constants";
import { useMutation } from "@apollo/client";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SIGNUP_MUTATION from "@/db/mutations/createUser.js"
import AsyncStorage from "@react-native-async-storage/async-storage";


const signUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [signup] = useMutation(SIGNUP_MUTATION);

  const handleSignup = async () => {
    try {
      const { data } = await signup({
        variables: { name: username, email, password, phone },
      });
      console.log(data);
      await AsyncStorage.setItem("accessToken", data.createUser.accessToken);
      await AsyncStorage.setItem("refreshToken", data.createUser.refreshToken);
      Alert.alert("Signed up successfully!");
      router.replace("/(auth)/sign-in");
    } catch (error: any) {
      Alert.alert(`Signup error: ${error.message}`);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="mb-40">
          <TouchableOpacity
            onPress={() => {
              router.push("/(auth)/welcome");
            }}
          >
            <Image source={Icons.exitIcon} className="mt-8 ml-6" />
          </TouchableOpacity>

          <View className="flex justify-center items-center  ">
            <Text className="font-LeagueSpartanRegular text-3xl mt-10">
              Create Account
            </Text>
            <Text className="m-3 text-center font-LeagueSpartanRegular text-base mt-5 ">
              Welcome ! Sign up to access your account, manage bookings, and
              enjoy a smooth car rental experience.
            </Text>
          </View>

          <View className=" mt-6">
            <InputField
              label="Name"
              placeholder="Ex. Ashley Mark"
              containerStyle="py-2 px-6 rounded-2xl mb-6 "
              labelStyle="font-LeagueSpartanRegular text-2xl w-3/4 m-auto mb-3"
              inputStyle="font-LeagueSpartanRegular text-xl w-full"
              editable={true}
              inputModeType="text"
              onChangeText={setUsername}
            />
            <InputField
              label="Email"
              placeholder="example@gmail.com"
              containerStyle="py-2 px-6 rounded-2xl mb-6 "
              labelStyle="font-LeagueSpartanRegular text-2xl w-3/4 m-auto mb-3"
              inputStyle="font-LeagueSpartanRegular text-xl w-full"
              editable={true}
              inputModeType="email"
              onChangeText={setEmail}
            />
            <InputField
              label="Password"
              placeholder="*********"
              containerStyle="py-2 px-6 rounded-2xl mb-6 "
              labelStyle="font-LeagueSpartanRegular text-2xl w-3/4 m-auto mb-3"
              inputStyle="font-LeagueSpartanRegular text-xl w-full"
              editable={true}
              inputModeType="password"
              onChangeText={setPassword}
            />
            <InputField
              label="Phone Number"
              placeholder="*********"
              containerStyle="py-2 px-6 rounded-2xl mb-6 "
              labelStyle="font-LeagueSpartanRegular text-2xl w-3/4 m-auto mb-3"
              inputStyle="font-LeagueSpartanRegular text-xl w-full"
              editable={true}
              inputModeType="numeric"
              onChangeText={setPhone}
              maxLength={10}
            />
          </View>

          <CustomButton
            title="Sign up"
            classname="w-2/4 m-auto  mt-8 bg-button-color "
            textStyle="text-white text-center w-full  font-LeagueSpartanBold text-xl"
            onPress={handleSignup}
          />
          <View className="w-3/4 m-auto h-[2px] rounded-full mt-7 bg-button-color"></View>
          <View>
            <Text className="text-center font-LeagueSpartanMedium text-base mt-5 mb-6 ">
              Or Sign up with
            </Text>
            <View className="flex flex-row justify-center items-center  gap-7">
              <Image source={Icons.facebookIcon} />
              <Image source={Icons.googleIcon} />
              <Image source={Icons.appleIcon} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signUp;
