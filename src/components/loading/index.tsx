import { ActivityIndicator } from "react-native";
import { s } from "./styles";
import { colors } from "@/styles/colors";

export const Loading = () => {
  return (
    <ActivityIndicator size="large" color={colors.purple.base} style={s.container} />
   )
};