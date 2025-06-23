import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useState } from "react";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPress = () => {
    if (!email || !password) {
      Alert.alert("Invalid Input. Fill all fields");
      return;
    }

    if (email === "test@senecapolytechnic.ca" && password === "test123") {
      navigation.replace("TransactionList");
    } else {
      Alert.alert("Unable to Login. Wrong details");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyFinance</Text>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="gray"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="gray"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={onLoginPress} color="seagreen" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
    padding: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginBottom: 40,
  },
  inputBox: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    marginBottom: 6,
  },
  input: {
    height: 50,
    backgroundColor: "#1e1e1e",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    paddingHorizontal: 15,
    color: "white",
  },
  buttonContainer: {
    marginTop: 10,
  },
});