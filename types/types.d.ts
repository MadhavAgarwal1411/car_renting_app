import React from "react";
import { TextInputProps, TouchableOpacityProps } from "react-native";

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
}

declare interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  classname?: string;
  textStyle?: string;
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
  id: string;
  name: string;
  email: string;
}

declare interface AuthContextProps {
  user: User | undefined;
  setUser: (user: User) => void;
}