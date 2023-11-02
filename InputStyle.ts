import { StyleSheet } from "react-native";
import { TextStyle } from ".";
import { colors } from "./Colors";

export const PrimaryInputStyle = StyleSheet.create({
  titleStyle: {
    ...TextStyle.body,
    color: colors.dark,
    paddingLeft: 10,
  },
  inputTextStyle: {
    borderRadius: 60,
    borderWidth: 3,
    borderColor: colors.grey,
    // width: 300,
    height: 50,
    alignSelf: "stretch",
  },
  inputContainer: {
    flexGrow: 0,
  },
});

export const SquareInputStyle = StyleSheet.create({
  titleStyle: {
    ...TextStyle.body,
    color: colors.dark,
    paddingLeft: 10,
  },
  inputTextStyle: {
    borderRadius: 60,
    borderWidth: 3,
    borderColor: colors.grey,
    // width: 300,
    height: 50,
    alignSelf: "stretch",
  },
  inputContainer: {
    flexGrow: 0,
  },
});
