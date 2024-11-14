import CustomText from "@/components/shared/CustomText";
import SignUpForm from "@/components/SignUpForm";
import { Icons } from "@/constants";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const signUp = () => {
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

          <View className="flex justify-center items-center">
            <CustomText className="font-LeagueSpartanRegular text-3xl mt-10" text="Create Account" />
              
            <CustomText text="Welcome ! Sign up to access your account, manage bookings, and
              enjoy a smooth car rental experience." className="m-3 text-center font-LeagueSpartanRegular text-base mt-5 "/>
              
          </View>
            <SignUpForm />

          <View className="w-3/4 m-auto h-[2px] rounded-full mt-7 bg-button-color"></View>
          <View>
            <CustomText text="Or Sign up with" className="text-center font-LeagueSpartanMedium text-base mt-5 mb-6 "/>
              
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
