import { ButtonProps } from "@/types/types"
import { Text, TouchableOpacity } from "react-native"


const CustomButton = ({title,bgVariant,textVariant, className, ...props}:ButtonProps) => 
  ( 
   <TouchableOpacity className= {` w-full rounded-full justify-center items-center p-3 flex flex-row shadow-md shadow-neutral-400/70 ${className}`}>
 <Text>{title}</Text>
   </TouchableOpacity>
  )


export default CustomButton;
