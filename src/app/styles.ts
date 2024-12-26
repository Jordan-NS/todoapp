import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme";

export const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    backgroundColor: "#FFF",
    padding: 20,
    paddingTop: 173,
    alignItems: 'center',
  },
  logo: {
    color: '#FFF',
    fontSize: 24,
  },
  middleSection: {
    backgroundColor: "#FFF",
    height: 1,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray[100],
    padding: 30,
    borderRadius: 5,
    marginRight: 4,
  },
  input: {
    flex: 1,
  },
  addButton: {
    backgroundColor: colors.blue.base,
    borderRadius: 5,
    padding: 10,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: colors.gray[600],
    paddingTop: 40,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: colors.gray[100],
    borderRadius: 5,
    marginTop: 10,
  },
  taskText: {
    flex: 1,
    color: colors.gray[700],
    marginLeft: 10,
  },
  taskTextCompleted: {
    flex: 1,
    color: colors.gray[700],
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
});