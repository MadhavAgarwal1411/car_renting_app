import React from "react";
import SIGNUP_MUTATION from "@/db/mutations/createUser.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ShowAlert from "@/components/ShowAlert";
import CustomButton from "@/components/shared/CustomButton";
import InputField from "@/components/shared/InputField";
import { useMutation } from "@apollo/client";
import { router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Alert, Text, View } from "react-native";
import CustomText from "./shared/CustomText";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [signup, { loading, error, reset }] = useMutation(SIGNUP_MUTATION);

  const handleSignup = async () => {
    if (email && password && username && phone) {
      try {
        const { data } = await signup({
          variables: { name: username, email, password, phone },
        });
        console.log(data);
        await AsyncStorage.setItem("accessToken", data.createUser.accessToken);
        await AsyncStorage.setItem(
          "refreshToken",
          data.createUser.refreshToken
        );
        Alert.alert("Signed up successfully!");
        router.replace("/(auth)/sign-in");
      } catch (error: any) {
        console.log(error.message);
      }
    }else{
        setMessage("All the Fields are required")
    }
  };
  return (
    <>
      <View className=" mt-6">
        <InputField
          label="Name"
          placeholder="Ex. Ashley Mark"
          containerStyle="py-2 px-6 rounded-2xl mb-6 "
          labelStyle="font-LeagueSpartanRegular text-2xl w-3/4 m-auto mb-3"
          inputStyle="font-LeagueSpartanRegular text-xl "
          editable={true}
          inputModeType="text"
          onChangeText={setUsername}
          autoFocus={true}
          autoComplete="name"
        />
        <InputField
          label="Email"
          placeholder="example@gmail.com"
          containerStyle="py-2 px-6 rounded-2xl mb-6 "
          labelStyle="font-LeagueSpartanRegular text-2xl w-3/4 m-auto mb-3"
          inputStyle="font-LeagueSpartanRegular text-xl "
          editable={true}
          inputModeType="email"
          onChangeText={setEmail}
          autoComplete="email"
          keyboardType="email-address"
          //   defaultValue="@gmail.com"
        />
        <InputField
          label="Password"
          placeholder="*********"
          containerStyle="py-2 px-6 rounded-2xl mb-6 "
          labelStyle="font-LeagueSpartanRegular text-2xl w-3/4 m-auto mb-3"
          inputStyle="font-LeagueSpartanRegular text-xl "
          editable={true}
          inputModeType="password"
          maxLength={20}
          onChangeText={setPassword}
          autoComplete="password"
          secureTextEntry
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
          maxLength={15}
          autoComplete="tel"
          keyboardType="phone-pad"
        />
      </View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <CustomButton
          title="Sign up"
          classname="w-2/4 m-auto  mt-8 bg-button-color "
          textStyle="text-white text-center w-full  font-LeagueSpartanBold text-xl"
          onPress={handleSignup}
        />
      )}
      <CustomText
        className="text-center text-red-600 mt-2"
        text={`${message}`}
      />

      {error && (
        <ShowAlert
          message={error.message}
          onDismiss={() => {
            reset();
          }}
        />
      )}
    </>
  );
};

export default SignUpForm;
