import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { blackHex } from "./constants/constants";
import GameOverScreen from "./screens/GameOverScreen";

// To save ourselves go text or components behind the notch we can use a core-component
// SafeAreaView

const App = () => {
  const [number, setNumber] = useState();
  const [rounds, setRounds] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  let screen = <StartGameScreen />;

  if (!number) {
    screen = <StartGameScreen showGameScreen={setNumber} />;
  }

  if (number) {
    screen = (
      <GameScreen
        enteredNumber={number}
        setRounds={setRounds}
        setGameOver={setGameOver}
      />
    );
  }

  if (gameOver) {
    screen = (
      <GameOverScreen
        rounds={rounds}
        setNumber={setNumber}
        setGameOver={setGameOver}
        setRounds={setRounds}
      />
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <ImageBackground
        source={require("./assets/1-removebg-preview.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: blackHex,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
});
