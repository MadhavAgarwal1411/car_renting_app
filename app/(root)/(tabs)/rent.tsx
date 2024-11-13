import CustomButton from "@/components/shared/CustomButton";
import { Icons } from "@/constants";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Alert } from "react-native";
import { useMutation, useQuery } from "@apollo/client";
import React, {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import useUsers from "@/hooks/useUsers";
import UPLOAD_IMAGE_MUTATION from "@/db/mutations/uploadImage";
import * as ImagePicker from "expo-image-picker";
import AWS from "aws-sdk";
import GET_CARS from "@/db/queries/useCars";

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

  const [uploadImageMutation] = useMutation(UPLOAD_IMAGE_MUTATION);
  const [image, setImage] = useState("");

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

  // return (
  //   <SafeAreaView>
  //     <ScrollView>
  //       <View className="w-4/5 m-auto mb-40">
  //         <Text className="font-LeagueSpartanRegular text-3xl mt-7 text-center">
  //           Add your rental car and earn like second salary
  //         </Text>
  //         <Text className="mt-5 font-LeagueSpartanRegular text-lg">
  //           Upload your car picture
  //         </Text>
  //         <View className="flex justify-evenly flex-row bg-placeholder-color mt-3 items-center py-10 rounded-xl ">
  //           <TouchableOpacity onPress={pickImage} className=" ">
  //             <Image source={Icons.plusIcon} className="" />
  //           </TouchableOpacity>
  //           <TouchableOpacity onPress={pickImage}>
  //             <Image source={Icons.plusIcon} />
  //           </TouchableOpacity>
  //         </View>
  //         <Text className="mt-5 font-LeagueSpartanRegular text-lg">
  //           Upload your car picture
  //         </Text>
  //         <View className="flex justify-evenly flex-row bg-placeholder-color mt-3 items-center py-10 rounded-xl ">
  //           <TouchableOpacity onPress={pickImage} className=" ">
  //             <Image source={Icons.plusIcon} className="" />
  //           </TouchableOpacity>
  //           <TouchableOpacity onPress={pickImage}>
  //             <Image source={Icons.plusIcon} />
  //           </TouchableOpacity>
  //         </View>
  //         <Text className="mt-5 font-LeagueSpartanRegular text-lg">
  //           Upload your car picture
  //         </Text>
  //         <View className="flex justify-evenly flex-row bg-placeholder-color mt-3 items-center py-10 rounded-xl ">
  //           <TouchableOpacity onPress={pickImage} className=" ">
  //             <Image source={Icons.plusIcon} className="" />
  //           </TouchableOpacity>
  //           <TouchableOpacity onPress={pickImage}>
  //             <Image source={Icons.plusIcon} />
  //           </TouchableOpacity>
  //         </View>
  //         <CustomButton
  //           title="Submit for verification "
  //           textStyle="text-center font-LeagueSpartanRegular text-[20px] text-white w-full"
  //           classname="bg-button-color  m-auto w-3/4 mt-7 "
  //         />
  //       </View>
  //     </ScrollView>
  //   </SafeAreaView>
  // );

    const { loading, error, data } = useQuery(GET_CARS);

    if (loading) return <ActivityIndicator />;
    if (error) return <Text>Error: {error.message}</Text>;

    return (
      <View>
        {data.cars.map((car) => (
          <View
            key={car.id}
            style={{
              width: "90%",
              alignSelf: "center",
              padding: 10,
              backgroundColor: "white",
              elevation: 5,
              marginTop: 10,
            }}
          >
            <Text>Name: {car.brand}</Text>
            <Text>Email: {car.model}</Text>
            <Text>Age: {car.price}</Text>
          </View>
        ))}
      </View>
    );
};

export default rent;
