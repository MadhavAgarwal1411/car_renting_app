import CustomButton from "@/components/CustomButton"
import { Icons } from "@/constants"
import {  Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"


import * as ImagePicker from "expo-image-picker";
import { useState } from "react";


const rent = () => {

  const [image,setImage] =useState("")

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // here it is where we specify the allow format
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });
   
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      // to upload image see the next function
      
    }
  }
  

  return (
    <SafeAreaView>
   <ScrollView>
<View className="w-4/5 m-auto mb-40">
  <Text className="font-LeagueSpartanRegular text-3xl mt-7 text-center">
    Add your rental car and earn like second salary
  </Text>
  <Text className="mt-5 font-LeagueSpartanRegular text-lg">
      Upload your car picture 
    </Text>
  <View className="flex justify-evenly flex-row bg-placeholder-color mt-3 items-center py-10 rounded-xl ">
    <TouchableOpacity onPress={pickImage} className=" ">
   <Image source={Icons.plusIcon} className=""/>
   </TouchableOpacity>
   <TouchableOpacity onPress={pickImage}>
   <Image source={Icons.plusIcon} />
   </TouchableOpacity>
  </View>
  <Text className="mt-5 font-LeagueSpartanRegular text-lg">
      Upload your car picture 
    </Text>
  <View className="flex justify-evenly flex-row bg-placeholder-color mt-3 items-center py-10 rounded-xl ">
    <TouchableOpacity onPress={pickImage} className=" ">
   <Image source={Icons.plusIcon} className=""/>
   </TouchableOpacity>
   <TouchableOpacity onPress={pickImage}>
   <Image source={Icons.plusIcon} />
   </TouchableOpacity>
  </View>
  <Text className="mt-5 font-LeagueSpartanRegular text-lg">
      Upload your car picture 
    </Text>
  <View className="flex justify-evenly flex-row bg-placeholder-color mt-3 items-center py-10 rounded-xl ">
    <TouchableOpacity onPress={pickImage} className=" ">
   <Image source={Icons.plusIcon} className=""/>
   </TouchableOpacity>
   <TouchableOpacity onPress={pickImage} > 
   <Image source={Icons.plusIcon} />
   </TouchableOpacity>
  </View>
 <CustomButton title="Submit for verification " textStyle="text-center font-LeagueSpartanRegular text-[20px] text-white w-full" classname="bg-button-color  m-auto w-3/4 mt-7 " />
</View>
   </ScrollView>
   </SafeAreaView>
   
  )
}

export default rent
