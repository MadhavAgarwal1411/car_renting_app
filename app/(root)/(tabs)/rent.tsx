import CustomButton from "@/components/shared/CustomButton";
import { Icons } from "@/constants";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import AWS from "aws-sdk";
import CustomText from "@/components/shared/CustomText";
// import UPLOAD_IMAGE_MUTATION from "@/db/mutations/uploadImage";
// import { useMutation } from "@apollo/client";

AWS.config.update({
  region: process.env.EXPO_PUBLIC_S3_REGION,
  accessKeyId: process.env.EXPO_PUBLIC_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.EXPO_PUBLIC_S3_BUCKET_NAME,
});

const s3 = new AWS.S3({
  params: { Bucket: `${process.env.EXPO_PUBLIC_S3_BUCKET_NAME}` },
});

const rent: React.FC = () => {
  // const [imageUri, setImageUri] = useState<string>();

  // const [uploadImageMutation] = useMutation(UPLOAD_IMAGE_MUTATION);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert("Permission to access gallery is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      let imageUri = result.assets[0].uri;
      uploadImage(imageUri);
    }
  };

  const uploadImage = async (uri: string) => {
    if (!uri) return;

    const response = await fetch(uri);
    const blob = await response.blob();
    const filename = uri.split("/").pop();

    const params = {
      Key: `${filename}`,
      Body: blob,
      ContentType: "image/jpg",
      Bucket: `${process.env.EXPO_PUBLIC_S3_BUCKET_NAME}`,
    };

    s3.upload(params, (err: any, data: any) => {
      if (err) {
        console.log("Error uploading image:", err);
        Alert.alert("Upload failed");
      } else {
        console.log("Image uploaded successfully:", data.Location);
        Alert.alert("Image uploaded successfully!");
      }
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="w-4/5 m-auto mb-40">
          <CustomText
            className="font-LeagueSpartanRegular text-3xl mt-7 text-center"
            text="Add your rental car and earn like second salary"
          />
          <CustomText
            className="mt-5 font-LeagueSpartanRegular text-lg"
            text="Upload your car picture"
          />
          <View className="flex justify-evenly flex-row bg-placeholder-color mt-3 items-center py-10 rounded-xl ">
            <TouchableOpacity onPress={pickImage} className=" ">
              <Image source={Icons.plusIcon} className="" />
            </TouchableOpacity>
            <TouchableOpacity onPress={pickImage}>
              <Image source={Icons.plusIcon} />
            </TouchableOpacity>
          </View>
          <CustomText
            className="mt-5 font-LeagueSpartanRegular text-lg"
            text="Upload your car picture"
          />
          <View className="flex justify-evenly flex-row bg-placeholder-color mt-3 items-center py-10 rounded-xl ">
            <TouchableOpacity onPress={pickImage} className=" ">
              <Image source={Icons.plusIcon} className="" />
            </TouchableOpacity>
            <TouchableOpacity onPress={pickImage}>
              <Image source={Icons.plusIcon} />
            </TouchableOpacity>
          </View>
          <CustomText
            className="mt-5 font-LeagueSpartanRegular text-lg"
            text="Upload your car picture"
          />

          <View className="flex justify-evenly flex-row bg-placeholder-color mt-3 items-center py-10 rounded-xl ">
            <TouchableOpacity onPress={pickImage} className=" ">
              <Image source={Icons.plusIcon} className="" />
            </TouchableOpacity>
            <TouchableOpacity onPress={pickImage}>
              <Image source={Icons.plusIcon} />
            </TouchableOpacity>
          </View>
          <CustomButton
            title="Submit for verification "
            textStyle="text-center font-LeagueSpartanRegular text-[20px] text-white w-full"
            classname="bg-button-color  m-auto w-3/4 mt-7 "
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default rent;
