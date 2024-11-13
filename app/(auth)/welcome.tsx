import CustomButton from "@/components/shared/CustomButton";
import { Images, Icons } from "@/constants";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView className="bg-zinc-500">
      <ScrollView>
        <View className=" h-screen w-full bg-znc-500 mb-32">
          <View className="flex items-end px-5 py-5 ">
            <TouchableOpacity
              onPress={() => {
                router.push("/(root)/(tabs)/home");
              }}
            >
              <Text className="text-white text-xl bg-black px-3 py-1 rounded-xl font-LeagueSpartanRegular">
                SKIP
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={Images.heroImage}
              className=" w-[100%] h-[35%] mt-14 "
            />
            <View className="">
              <Text className="text-white text-[40px] pt-3 px-5 font-LeagueSpartanBold">
                Discover the perfect rental car for your journey!
              </Text>
              <Text className="text-zinc-200 text-base pt-3 px-5 font-LeagueSpartanRegular">
                Your all-in-one solution for hassle-free, affordable, and
                convenient car rentals. Explore, reserve, and hit the road with
                ease
              </Text>
              <CustomButton
                onPress={() => {
                  router.push("/(auth)/sign-in");
                }}
                IconRight={() => (
                  <Image
                    resizeMode="contain"
                    source={Icons.angleIcon}
                    className="w-5 h-5 mt-2 "
                  />
                )}
                title="Get started"
                classname="bg-slate-300 mt-14 w-3/4 mx-auto justify-between "
                textStyle="text-3xl font-LeagueSpartanRegular"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
