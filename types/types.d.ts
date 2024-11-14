import React from "react";
import { TextInputProps, TextProps, TouchableOpacityProps } from "react-native";

declare interface InputFieldProps extends TextInputProps {
  label: string;
  icon?: any;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
  inputModeType?: string;
  editable?: boolean;
  maxLabelSizeMultiplier?: number;
  maxInputSizeMultiplier?: number;
}

declare interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  classname?: string;
  textStyle?: string;
  maxFontSizeMultiplier?: number;

}
declare interface CustomTextProps extends TextProps {
  maxFontSizeMultiplier?: number;
  text: string;
  textVariant?: "primary" | "secondary";
}
declare interface TripHistoryDetails {
  tripId: string;
  tripDate: string;
  tripTime: string;
  tripOrigin: string;
  tripDestination: string;
  tripStatus: string;
  tripDistance: string;
  tripDuration: string;
  carImage?: React.ComponentType<any>;
}
declare interface User {
  id: string | null;
  name: string | null;
  email: string | null;
  phone: string | null;
  __typename: string | null;
}

declare interface AuthContextProps {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}