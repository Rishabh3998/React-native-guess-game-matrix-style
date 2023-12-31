import { matrixGreenHex } from "../constants/constants";
import { StyleSheet, Text, View } from "react-native";

const GuessList = ({ itemData }: any) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.listItem}>{`#${itemData.index}`}</Text>
      <Text
        style={styles.listItem}
      >{`Computer's guess: ${itemData.item}`}</Text>
    </View>
  );
};

export default GuessList;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    borderColor: matrixGreenHex,
    borderWidth: 2,
    marginVertical: 10,
    paddingVertical: 10,
  },
  listItem: {
    fontSize: 20,
    color: matrixGreenHex,
    fontWeight: "600",
    paddingHorizontal: 20,
  },
});
