import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} keyboardType="number-pad" maxLength={2}  />
      <PrimaryButton>Confirm</PrimaryButton>
      <PrimaryButton>Reset</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#4f082c",
    elevation: 4,
    shadowColor: "black",
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    color: "#ddb52f",
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 8,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
  },
});
