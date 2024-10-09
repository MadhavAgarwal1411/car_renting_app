import CustomButton from "@/components/CustomButton"
import { Images } from "@/constants"
import {  Image, Text,TouchableOpacity,View  } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"


const index = () => {
  return (
  <SafeAreaView className="bg-zinc-500">
    <View className="h-screen w-full bg-znc-500">
    <View className="flex items-end px-5 py-5 ">
        <TouchableOpacity  >
            <Text className="text-white text-xl bg-black px-3 py-1 rounded-xl" > SKIP </Text>
        </TouchableOpacity>
    
    </View>
<View>
    <Image source={Images.heroImage} className="w-[560px] h-[360px] mt-[130px]"/>
    <Text className="text-white text-[40px] pt-3 px-5">Discover the perfect rental car for your journey!</Text>
    <Text className="text-zinc-200 text-base pt-3 px-5">Your all-in-one solution for hassle-free, affordable, and convenient car rentals. Explore, reserve, and hit the road with ease</Text>
    <CustomButton title="Get started"  className="bg-black" />
</View>
    </View>
</SafeAreaView>

  )
}



  

  


export default index

