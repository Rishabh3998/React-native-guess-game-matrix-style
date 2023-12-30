import PrimaryButton from "../components/PrimaryButton";
import { blackHex, matrixGreenHex } from "../constants/constants";
import { StyleSheet, Text, View } from "react-native";

const GameOverScreen = ({ rounds, setNumber, setGameOver, setRounds }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Game over Screen</Text>
        <View style={styles.cardInnerContainer}>
          <Text
            style={styles.subHeading}
          >{`Number of Rounds : ${rounds}`}</Text>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              color={matrixGreenHex}
              style={styles.innerButton}
              onPress={() => {
                setNumber("");
                setGameOver(false);
                setRounds(0);
              }}
            >
              Start new game
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  heading: {
    color: matrixGreenHex,
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "500",
  },
  subHeading: {
    color: matrixGreenHex,
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "500",
  },
  card: {
    backgroundColor: blackHex,
    padding: 50,
    margin: 20,
    borderColor: matrixGreenHex,
    borderWidth: 2,
  },
  innerButton: {
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 40,
  },
  cardInnerContainer: {
    width: "100%",
    justifyContent: "center",
    marginTop: 30,
  },
});
