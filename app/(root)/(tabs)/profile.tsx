import InputField from "@/components/shared/InputField";
import { Icons, Images } from "@/constants";
import { Image, ScrollView, Text, View } from "react-native";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PROFILEDATA = [
  { Logo: Icons.paperIcon, title: "Policies" },
  { Logo: Icons.helpIcon, title: "Help & Support" },
  { Logo: Icons.rateIcon, title: "Rate us" },
  { Logo: Icons.settingIcon, title: "Account setting" },
  { Logo: Icons.logOutIcon, title: "Log out" },
];

const profile = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="mb-40">
          <View className="flex justify-center items-center ">
            <Image source={Images.profilepicture} />
          </View>
          <View className="flex mb-10">
            <InputField
              inputModeType="text"
              label="First Name"
              placeholder="Ashley"
              containerStyle="py-2 px-6 rounded-2xl mb-6 "
              labelStyle="font-LeagueSpartanRegular text-2xl w-3/4 m-auto"
              inputStyle="font-LeagueSpartanRegular text-xl"
              icon={Icons.edit}
            />
            <InputField
              inputModeType="text"
              label="Last Name"
              placeholder="Mark"
              containerStyle="py-2 px-6 rounded-2xl mb-6"
              labelStyle="font-LeagueSpartanRegular text-2xl w-3/4 m-auto"
              inputStyle="font-LeagueSpartanRegular text-xl"
              icon={Icons.edit}
            />
            <InputField
              inputModeType="email"
              label="Email address"
              placeholder="ashleymark@gmail.com"
              containerStyle="py-2 px-6 rounded-2xl mb-6"
              labelStyle="font-LeagueSpartanRegular text-2xl w-3/4 m-auto"
              inputStyle="font-LeagueSpartanRegular text-xl"
              icon={Icons.edit}
            />
            <InputField
              inputModeType="tel"
              label="Phone Number"
              placeholder="+91 86****3623"
              containerStyle="py-2 px-6 rounded-2xl mb-6"
              labelStyle="font-LeagueSpartanRegular text-2xl w-3/4 m-auto"
              inputStyle="font-LeagueSpartanRegular text-xl"
              icon={Icons.edit}
            />
            <InputField
              inputModeType="text"
              label="Location"
              placeholder="jvhjhgj"
              containerStyle="py-2 px-6 rounded-2xl mb-6"
              labelStyle="font-LeagueSpartanRegular text-2xl w-3/4 m-auto"
              inputStyle="font-LeagueSpartanRegular text-xl"
              icon={Icons.edit}
            />
          </View>

          <View className=" w-3/4 m-auto">
            <View className="flex bg-button-color flex-row py-6 px-4 rounded-3xl mb-4">
              <Image source={Icons.paperIcon} className="  " />
              <Text className="text-2xl font-LeagueSpartanRegular text-center pl-5 text-white">
                Policies
              </Text>
              <Image
                resizeMode="contain"
                source={Icons.angleIcon}
                className="w-5 h-5 mt-2 "
              />
            </View>
          </View>
          <View className=" w-3/4 m-auto">
            <View className="flex bg-button-color flex-row py-6 px-4 rounded-3xl mb-4">
              <Image source={Icons.helpIcon} className="  " />
              <Text className="text-2xl font-LeagueSpartanRegular text-center pl-5 text-white">
                Help & Support
              </Text>
              <Image
                resizeMode="contain"
                source={Icons.angleIcon}
                className="w-5 h-5 mt-2 "
              />
            </View>
          </View>
          <View className=" w-3/4 m-auto">
            <View className="flex bg-button-color flex-row py-6 px-4 rounded-3xl mb-4">
              <Image source={Icons.rateIcon} className="  " />
              <Text className="text-2xl font-LeagueSpartanRegular text-center pl-5 text-white">
                Rate us
              </Text>
              <Image
                resizeMode="contain"
                source={Icons.angleIcon}
                className="w-5 h-5 mt-2 "
              />
            </View>
          </View>
          <View className=" w-3/4 m-auto">
            <View className="flex bg-button-color flex-row py-6 px-4 rounded-3xl mb-4">
              <Image source={Icons.settingIcon} className="  " />
              <Text className="text-2xl font-LeagueSpartanRegular text-center pl-5 text-white">
                Account setting
              </Text>
              <Image
                resizeMode="contain"
                source={Icons.angleIcon}
                className="w-5 h-5 mt-2 "
              />
            </View>
          </View>
          <View className=" w-3/4 m-auto">
            <View className="flex bg-button-color flex-row py-6 px-4 rounded-3xl mb-4">
              <Image source={Icons.logOutIcon} className="  " />
              <Text className="text-2xl font-LeagueSpartanRegular text-center pl-5 text-white">
                Log out
              </Text>
              <Image
                resizeMode="contain"
                source={Icons.angleIcon}
                className="w-5 h-5 mt-2 "
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
