// App.js

import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import LoginScreen from "./screens/LoginScreen";
import TransactionListScreen from "./screens/TransactionListScreen";
import TransactionDetailScreen from "./screens/TransactionDetailScreen";
import NewTransactionScreen from "./screens/NewTransactionScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransactionList"
          component={TransactionListScreen}
          options={{ title: "My Transactions" }}
        />
        <Stack.Screen
          name="TransactionDetail"
          component={TransactionDetailScreen}
          options={{ title: "Transaction Detail" }}
        />
        <Stack.Screen
          name="NewTransaction"
          component={NewTransactionScreen}
          options={{ title: "Add New Transaction" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});