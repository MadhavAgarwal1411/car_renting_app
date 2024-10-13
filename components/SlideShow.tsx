



import { onboarding } from '@/constants'
import React, { useRef, useState } from 'react'
import { Image, View } from 'react-native'
import Swiper from 'react-native-swiper'

const SlideShow = () => {
  const swiperRef = useRef<Swiper>(null)
  const [activeIndex,setActiveIndex]=useState(0)  
  const isLastSlide = activeIndex===onboarding.length-1
  return (
   
<Swiper className='h-[230px]' ref={swiperRef} loop={true} dot={
 <View className=" w-4 h-4 bg-placeholder-color rounded-full mx-1" /> 
} activeDot={
  <View className="w-4 h-4 bg-button-color rounded-full mx-1" /> 

} onIndexChanged={(index)=>{
setActiveIndex(index)
}} > 
{onboarding.map((item)=>(
<View key={item.id} className="w-full  flex justify-center items-center px-8 ">
<Image className="w-full rounded-3xl  " source={item.image} />
 </View>
))}
</Swiper>

  )
}

export default SlideShow

