import { Icons } from "@/constants";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ShowAlert = ({
  message,
  onDismiss,
}: {
  message: string;
  onDismiss: () => void;
}) => {
  return (
      <Text className="text-red-600 text-center">{message}</Text>
  );
};

export default ShowAlert;
