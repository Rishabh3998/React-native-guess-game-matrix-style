import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import { blackHex, matrixGreenHex } from "../constants/constants";

const StartGameScreen = ({ showGameScreen }: any) => {
  const [number, setNumber] = useState<string>("");

  const handleChangeText = (enteredInput: string) => {
    setNumber(enteredInput);
  };

  const handleReset = () => {
    setNumber("");
    showGameScreen();
  };

  const handleStart = () => {
    const chosenNumber = Number(number);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number should be in the range of 1 to 20",
        [{ text: "okay", style: "cancel", onPress: handleReset }]
      );
      return;
    }
    showGameScreen(chosenNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter a number between 1 to 20</Text>
      <TextInput
        selectionColor={matrixGreenHex}
        style={styles.inputContainer}
        keyboardType="number-pad"
        textContentType="telephoneNumber"
        textAlign="center"
        onChangeText={handleChangeText}
        value={number}
        maxLength={2}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton color={matrixGreenHex} onPress={handleReset}>
          Reset
        </PrimaryButton>
        <PrimaryButton color={matrixGreenHex} onPress={handleStart}>
          Start
        </PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: matrixGreenHex,
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "500",
  },
  inputContainer: {
    padding: 10,
    borderColor: matrixGreenHex,
    backgroundColor: blackHex,
    borderWidth: 1,
    width: "80%",
    marginTop: 20,
    marginBottom: 20,
    color: matrixGreenHex,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
