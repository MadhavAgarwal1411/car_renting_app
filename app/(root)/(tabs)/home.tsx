import CustomButton from "@/components/shared/CustomButton";
import Slideshow from "@/components/SlideShow";

import { carDetails, Icons, Images } from "@/constants";
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  { logo: Images.hyundaiLogo },

  { logo: Images.mahindraLogo },
  { logo: Images.suzukiLogo },
  { logo: Images.toyotaLogo },
];

// const CARDETAILS = [

//   {image:Images.innova },
//   {image:Images.swift },
//   {image:Images.alto },
//   {image: Images.fortuner}

//   ]

const home = () => {
  return (
    <SafeAreaView className="bg-screen-color">
      <ScrollView>
        <View>
          <View>
            <View className="flex flex-row justify-between w-3/4 m-auto mt-14">
              <View className="flex justify-center ">
                <Text className="font-LeagueSpartanRegular text-4xl">
                  Hello Ashley 👋
                </Text>

                <Text className="font-LeagueSpartanRegular text-lg">
                  Explore our services
                </Text>
              </View>
              <Image source={Images.ashleyImage} />
            </View>
            <View>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <View className="flex flex-row py-8 mx-10 pr-4">
                  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View className="bg-placeholder-color rounded-2xl  py-2 px-6  flex flex-row justify-between w-3/4 m-auto">
                      <TextInput className="font-LeagueSpartanRegular text-lg " placeholder="Search cars">
                      </TextInput>
                    </View>
                  </TouchableWithoutFeedback>
                  <CustomButton
                    IconRight={() => (
                      <Image
                        resizeMode="contain"
                        source={Icons.searchIcon}
                        className=" "
                      />
                    )}
                    classname="bg-button-color  "
                  />
                </View>
              </KeyboardAvoidingView>
            </View>
            <Slideshow />
          </View>
          <View>
            <View className="flex flex-row justify-between px-7">
              <Text className="font-LeagueSpartanMedium text-lg">
                Top Brands
              </Text>
              <Text className="font-LeagueSpartanMedium text-lg">See all</Text>
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={DATA}
              horizontal
              renderItem={({ item }) => (
                <View className="flex flex-row justify-between m-auto ">
                  <View className="flex flex-row justify-center items-center bg-button-color rounded-full w-16 h-16 mx-6 mt-4">
                    <Image
                      source={item.logo}
                      resizeMode="contain"
                      className=""
                    />
                  </View>
                </View>
              )}
            />
          </View>
          <View className="mb-[100px] mt-5">
            <View className="flex flex-row justify-between px-7">
              <Text className="font-LeagueSpartanMedium text-lg">
                Best Cars
              </Text>
              <Text className="font-LeagueSpartanMedium text-lg">See all</Text>
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={carDetails}
              horizontal
              renderItem={({ item }) => (
                <View className="flex flex-row  m-auto  ">
                  <View className=" text-center flex justify-center items-center w-[160px] bg-placeholder-color rounded-3xl mx-3 mt-4 ">
                    <Image
                      source={item.image}
                      resizeMode="contain"
                      className="w-[130px]"
                    />
                    <Text className="font-LeagueSpartanRegular text-xl">
                      {item.title}
                    </Text>
                    <View className="flex flex-row gap-5">
                      <Text className="font-LeagueSpartanRegular text-sm">
                        {item.price}
                      </Text>
                      <Text className="font-LeagueSpartanRegular text-sm">
                        {item.ratings}
                      </Text>
                    </View>
                    <CustomButton
                      title="BOOK NOW"
                      classname="bg-button-color  mt-3 py-1 mb-[20px]"
                      textStyle="text-white"
                    />
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
