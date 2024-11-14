import CustomButton from "@/components/shared/CustomButton";
import { Icons } from "@/constants";
import { router } from "expo-router";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// import { useState } from "react";
import SignInForm from "@/components/SignInForm";
import CustomText from "@/components/shared/CustomText";
// import client from "@/hooks/useApolloClient";

const signIn = () => {
  // const [message, setMessage] = useState("");

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="mb-40">
          <TouchableOpacity
            onPress={() => {
              router.replace("/(auth)/welcome");
            }}
          >
            <Image source={Icons.exitIcon} className="mt-8 ml-6" />
          </TouchableOpacity>

          <View className="flex justify-center items-center  ">
            <CustomText
              className="font-LeagueSpartanRegular text-3xl mt-10"
              text="Welcome back!"
            />
            <CustomText
              className="m-3 text-center font-LeagueSpartanRegular text-base mt-5 "
              text="Sign in to access your account, manage bookings, and enjoy a
              smooth car rental experience."
            />
          </View>
          <SignInForm />

          <View className="w-3/4 m-auto h-[2px] rounded-full mt-7 bg-button-color"></View>
          <View>
            <CustomText
              className="text-center font-LeagueSpartanMedium text-base mt-5 mb-6 "
              text="Or Sign in with"
            />
            <View className="flex flex-row justify-center items-center  gap-7">
              <Image source={Icons.facebookIcon} />
              <Image source={Icons.googleIcon} />
              <Image source={Icons.appleIcon} />
            </View>
            <View>
              <CustomText
                className="text-center mt-5 text-lg"
                text="Do you have account ?"
              />
              <CustomButton
                onPress={() => {
                  router.push("/(auth)/sign-up");
                }}
                title="Sign up"
                classname=" w-2/5 m-auto py-2 mt-4 bg-button-color "
                textStyle="text-white text-center w-full  font-LeagueSpartanSemiBold text-xl"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signIn;
