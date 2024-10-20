import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { Icons } from "@/constants";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const signUp = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View className="mb-40">
        <TouchableOpacity onPress={() => {
          router.push("/(auth)/welcome")
        }}>
          <Image source={Icons.exitIcon} className="mt-8 ml-6" />
        </TouchableOpacity>

        <View className="flex justify-center items-center  ">
          <Text className="font-LeagueSpartanRegular text-3xl mt-10">
            Create Account
          </Text>
          <Text className="m-3 text-center font-LeagueSpartanRegular text-base mt-5 ">
            
            Welcome ! Sign up to access your account, manage bookings, and enjoy
            a smooth car rental experience.
          </Text>
        </View>

        <View className=" mt-6">
          <InputField
            label="Name"
            placeholder="Ex. Ashley Mark"
            containerStyle="py-2 px-6 rounded-2xl mb-6 "
            labelStyle="font-LeagueSpartanRegular text-2xl w-3/4 m-auto mb-3"
            inputStyle="font-LeagueSpartanRegular text-xl"
            editable={true}
            inputModeType="text"
          />
          <InputField
            label="Email"
            placeholder="example@gmail.com"
            containerStyle="py-2 px-6 rounded-2xl mb-6 "
            labelStyle="font-LeagueSpartanRegular text-2xl w-3/4 m-auto mb-3"
            inputStyle="font-LeagueSpartanRegular text-xl"
            editable={true}
            inputModeType="email"
          />
          <InputField
            label="Password"
            placeholder="*********"
            containerStyle="py-2 px-6 rounded-2xl mb-6 "
            labelStyle="font-LeagueSpartanRegular text-2xl w-3/4 m-auto mb-3"
            inputStyle="font-LeagueSpartanRegular text-xl"
            editable={true}
            inputModeType="password"
          />
        </View>

        <CustomButton
          title="Sign up"
          classname="w-2/4 m-auto  mt-8 bg-button-color "
          textStyle="text-white text-center w-full  font-LeagueSpartanBold text-xl"
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
