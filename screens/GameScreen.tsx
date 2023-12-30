import { blackHex, matrixGreenHex } from "../constants/constants";
import { StyleSheet, Text, View, Alert } from "react-native";
import { generateRandomNumber } from "../utils/helpers";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

const INITIAL_STATE = {
  minimumBoundary: 1,
  maximumBoundary: 20,
};

const GameScreen = ({ enteredNumber, setRounds, setGameOver }: any) => {
  const initialGuess = generateRandomNumber(
    INITIAL_STATE.minimumBoundary,
    INITIAL_STATE.maximumBoundary,
    Number(enteredNumber)
  );
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

  useEffect(() => {
    if (currentGuess === enteredNumber) {
      Alert.alert("Yay!", "Congratulations you guessed the right number", [
        { text: "Okay", style: "default" },
      ]);
      setGameOver(true);
    }
  }, [currentGuess, enteredNumber]);

  const generateNextGuess = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < enteredNumber) ||
      (direction === "higher" && currentGuess > enteredNumber)
    ) {
      Alert.alert(
        "Invalid guess",
        "Please enter a valid guess nearest to the number",
        [{ text: "Sorry!" }]
      );
      return;
    }
    if (direction === "lower") {
      const newGuess = generateRandomNumber(
        INITIAL_STATE.minimumBoundary,
        currentGuess,
        Number(currentGuess)
      );
      setCurrentGuess(newGuess);
      setRounds((prev: number) => prev + 1);
    } else {
      const newGuess = generateRandomNumber(
        currentGuess,
        INITIAL_STATE.maximumBoundary,
        Number(currentGuess)
      );
      setCurrentGuess(newGuess);
      setRounds((prev: number) => prev + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Computer's guess</Text>
      <Text style={styles.guess}>{currentGuess}</Text>
      <View style={styles.controllersContainer}>
        <PrimaryButton
          color={matrixGreenHex}
          style={styles.controllers}
          onPress={() => generateNextGuess("lower")}
        >
          -
        </PrimaryButton>
        <PrimaryButton
          color={matrixGreenHex}
          style={styles.controllers}
          onPress={() => generateNextGuess("higher")}
        >
          +
        </PrimaryButton>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "50%",
    alignItems: "center",
  },
  title: {
    color: matrixGreenHex,
    fontSize: 28,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "center",
    borderColor: matrixGreenHex,
    borderWidth: 2,
    paddingVertical: 10,
    width: "85%",
    backgroundColor: blackHex,
  },
  guess: {
    backgroundColor: blackHex,
    fontSize: 50,
    color: matrixGreenHex,
    paddingHorizontal: 80,
    paddingVertical: 20,
    marginTop: 50,
    borderColor: matrixGreenHex,
    borderWidth: 5,
  },
  controllersContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 50,
  },
  controllers: {
    width: 100,
    alignItems: "center",
  },
});
