import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme";

export const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    backgroundColor: colors.gray[700],
    padding: 20,
    height: 173,
    alignItems: 'center',
  },
  logoContainer: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  logo: {
    marginBottom: 20,
    width: 110,
    height: 32,
  },
  middleSection: {
    backgroundColor: colors.gray[700],
    height: 1,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray[500],
    padding: 20,
    height: 54,
    borderRadius: 5,
    marginRight: 4,
  },
  input: {
    flex: 1,
    color: colors.gray[100],
  },
  addIcon: {
    height: 16,
    width: 16,
    color: colors.gray[100],
  },
  addButton: {
    backgroundColor: colors.blue.dark,
    borderRadius: 6,
    padding: 15,
    height: 54,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: colors.gray[600],
    paddingTop: 40,
  },
  flatListContent: {
    paddingHorizontal: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.gray[500],
    borderRadius: 6,
    marginTop: 10,
  },
  taskText: {
    flex: 1,
    color: colors.gray[100],
    marginLeft: 10,
  },
  iconChecked: {
    backgroundColor: colors.purple.base, 
    borderRadius: 50, 
    padding: 4
  },
  taskTextCompleted: {
    flex: 1,
    color: colors.gray[300],
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
});