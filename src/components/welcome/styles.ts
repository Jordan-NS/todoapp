import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
  logo: {
    width:68,
    height: 111,
    marginBottom: 24,
    transform: [{ rotate: '60deg' }],
  },

  title: {
    fontSize: 24,
    fontFamily: fontFamily.bold,
    color: colors.gray[700],
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 12,
  },
});