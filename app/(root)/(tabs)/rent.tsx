import CustomButton from "@/components/CustomButton";
import { Icons } from "@/constants";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native";
import { useMutation, useQuery } from "@apollo/client";
import * as ImagePicker from "expo-image-picker";

import React, {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import useUsers from "@/hooks/useUsers";
import client from "@/hooks/useApolloClient";
import UPLOAD_IMAGE_MUTATION from "@/db/mutations/uploadImage";

const rent: React.FC = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");

  const [uploadImageMutation] = useMutation(UPLOAD_IMAGE_MUTATION);
  const [image, setImage] = useState("");

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
      await uploadImage(imageUri, "image");
    }
  }

  const uploadImage = async (uri: string | null, filetype: string) => {
    if (!imageUri) return;

    const formData = new FormData();
    formData.append("file", {
      uri: uri,
      name: "image.jpg", // You can dynamically name the file if needed
      type: filetype, // Adjust based on the file type
    });

    try {
      const { data } = await uploadImageMutation({
        variables: {
          file: formData.get("file"),
        },
      });
      setUploadStatus("Image uploaded successfully");
      console.log("Image upload success", data);
    } catch (error) {
      setUploadStatus("Image upload failed");
      console.error("Image upload failed", error);
    }
  };

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
              <Image source={Icons.plusIcon} className="" />
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
              <Image source={Icons.plusIcon} className="" />
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

  // const { loading, error, data } = useQuery(useUsers);

  // if (loading) return <ActivityIndicator />;
  // if (error) return <Text>Error: {error.message}</Text>;

  // return (
  //   <View>
  //     {data.users.map((user) => (
  //       <View
  //         key={user.id}
  //         style={{
  //           width: "90%",
  //           alignSelf: "center",
  //           padding: 10,
  //           backgroundColor: "white",
  //           elevation: 5,
  //           marginTop: 10,
  //         }}
  //       >
  //         <Text>Name: {user.name}</Text>
  //         <Text>Email: {user.email}</Text>
  //         <Text>Age: {user.age}</Text>
  //       </View>
  //     ))}
  //   </View>
  // );
};

export default rent;
