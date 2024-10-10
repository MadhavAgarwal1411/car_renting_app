import { ButtonProps } from "@/types/types"
import { Text, TouchableOpacity } from "react-native"


const CustomButton = ({title,bgVariant,textVariant, classname, textStyle, IconLeft, IconRight, ...props}:ButtonProps) => 
  ( 
   <TouchableOpacity className= {`rounded-full  p-4  flex flex-row shadow-md shadow-neutral-400/70 ${classname}`}>
    {IconLeft && < IconLeft/> }
 <Text  className= {`${textStyle}`} >{title}</Text >
 {IconRight && < IconRight/> }
 
   </TouchableOpacity>
  )


export default CustomButton;
