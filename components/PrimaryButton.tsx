import {
  blackHex,
  matrixDarkGreenHex,
  matrixGreenHex,
} from "../constants/constants";
import { StyleSheet, Text, View, Pressable } from "react-native";

const PrimaryButton = ({ children, color, onPress, style = {} }: any) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={(pressedData) =>
          pressedData.pressed
            ? [styles.pressed, styles.buttonInnerContainer, style]
            : [styles.buttonInnerContainer, style]
        }
        onPress={onPress}
        android_ripple={{ color: matrixDarkGreenHex }}
      >
        <Text style={[styles.buttonStyle, { color: color }]}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonStyle: {
    color: matrixGreenHex,
    elevation: 10,
    fontSize: 18,
  },
  buttonOuterContainer: {
    borderColor: matrixGreenHex,
    borderWidth: 2,
  },
  buttonInnerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    overflow: "hidden",
    backgroundColor: blackHex,
  },
  pressed: {
    opacity: 0.5,
  },
});
