import CustomText from "@/components/shared/CustomText";
import { carData } from "@/constants";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const trip = () => {
  const data = carData;

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="w-[85%] m-auto mb-44 ">
          <CustomText className="font-LeagueSpartanBold text-4xl mt-6 mb-4" text="Trip History" />
            
          <View className="">
            {data.map((tripData, index) => (
              <View
                key={index}
                className="bg-placeholder-color mb-5 p-4 shadow-md  rounded-xl"
              >
                {tripData.carImage && (
                  <Image
                    className="w-full"
                    resizeMode="contain"
                    source={tripData.carImage}
                  />
                )}
                <CustomText
                  className="font-LeagueSpartanRegular text-xl mt-2"
                  text={`${tripData.carName}`}
                />

                <CustomText
                  className=" bg-button-color w-1/3  rounded-lg text-center font-LeagueSpartanRegular text-xl mt-3 pt-1 pb-2  text-white"
                  text={`${tripData.tripStatus}`}
                />

                <CustomText
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  className="font-LeagueSpartanRegular text-lg mt-2"
                  text={`${tripData.tripStartDate} ${tripData.tripStartTime} ➜ ${tripData.tripEndDate} ${tripData.tripEndTime}`}
                />

                <CustomText
                  className="font-LeagueSpartanRegular text-lg mt-2"
                  text={`${tripData.tripOrigin} ➜ ${tripData.tripDestination}`}
                />
                {tripData.tripCall && (
                  <View className=" flex flex-row gap-3 mt-1">
                    <Image source={tripData.tripCall} />
                    <Image source={tripData.tripMessage} />
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default trip;
