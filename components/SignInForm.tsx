import React, { useState } from "react";
import ShowAlert from "@/components/ShowAlert";
import LOGIN_MUTATION from "@/db/mutations/loginUser.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUser } from "@/hooks/useUser";
import { useMutation } from "@apollo/client";
import InputField from "@/components/shared/InputField";
import { ActivityIndicator, Alert, Text, View } from "react-native";
import { router } from "expo-router";
import CustomButton from "./shared/CustomButton";

const SignInForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("")
  const { setUser } = useUser();

  const [login, { data, loading, error, reset }] = useMutation(LOGIN_MUTATION);

  const handleLogin = async () => {
    if (email && password){
    try {
      await login({
        variables: { loginUserEmail2: email, loginUserPassword2: password },
      }).then((res) => {
        console.log(res);
        if (res.data?.loginUser?.accessToken) {
          AsyncStorage.setItem("accessToken", res.data.loginUser.accessToken);
          AsyncStorage.setItem("refreshToken", res.data.loginUser.refreshToken);
          setUser(data);
          Alert.alert("Sign-in successful");
          router.replace("/(root)/home");
        }
      });
    } catch (error: any) {
      console.log(error.message);
    }
    } else{
      setMessage("All the fields are required");
    }

  };
  return (
    <>
      <View className=" mt-6">
        <InputField
          label="Email"
          placeholder="example@gmail.com"
          containerStyle="py-2 px-6 rounded-2xl mb-6 "
          labelStyle="font-LeagueSpartanRegular text-2xl w-3/4 m-auto mb-3"
          inputStyle="font-LeagueSpartanRegular text-xl"
          editable={true}
          inputModeType="email"
          onChangeText={setEmail}
          autoComplete="email"
          keyboardType="email-address"
          // autoFocus={true}
        />
        <InputField
          label="Password"
          placeholder="*********"
          containerStyle="py-2 px-6 rounded-2xl mb-6 "
          labelStyle="font-LeagueSpartanRegular text-2xl w-3/4 m-auto mb-3"
          inputStyle="font-LeagueSpartanRegular text-xl"
          editable={true}
          inputModeType="password"
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <CustomButton
          title="Sign in"
          classname="w-2/4 m-auto  mt-8 bg-button-color "
          textStyle="text-white text-center w-full  font-LeagueSpartanBold text-xl"
          onPress={handleLogin}
        />
      )}
      <Text className="text-center text-red-600 mt-2">{message}</Text>
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

export default SignInForm;
