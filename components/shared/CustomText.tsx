import { CustomTextProps } from "@/types/types";
import React from "react";
import { Text } from "react-native";

const CustomText = ({
  maxFontSizeMultiplier=1.2,
  text,
  textVariant,
  ...props
}: CustomTextProps) => {
  return (
    <Text
      className={` ${textVariant}`}
      maxFontSizeMultiplier={maxFontSizeMultiplier}
      {...props}
    >
      {text}
    </Text>
  );
};

export default CustomText;
