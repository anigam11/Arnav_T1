import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Pressable,
} from 'react-native';

export default function NewTransactionScreen({ navigation, route }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [isDeposit, setIsDeposit] = useState(null);

  const { onAdd } = route.params || {};

  const handleTransactionAdd = () => {
    const isFormIncomplete = !name || !amount || !type || isDeposit === null;

    if (isFormIncomplete) {
      Alert.alert('Please complete all fields before submitting.');
      return;
    }

    const transactionDetails = {
      id: Date.now().toString(),
      name: name,
      amount: parseFloat(amount),
      type: type,
      isDeposit: isDeposit,
    };

    if (onAdd) {
      onAdd(transactionDetails);
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Transaction Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Amount:</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Transaction Type:</Text>
      <TextInput
        style={styles.input}
        value={type}
        onChangeText={setType}
      />

      <Text style={styles.label}>Select Method:</Text>

      <View style={styles.checkboxContainer}>
        <Pressable
          style={styles.checkboxRow}
          onPress={() => setIsDeposit(true)}
        >
          <View style={styles.checkboxBox}>
            {isDeposit === true && <View style={styles.checkboxTick} />}
          </View>
          <Text style={styles.checkboxLabel}>Deposit</Text>
        </Pressable>

        <Pressable
          style={styles.checkboxRow}
          onPress={() => setIsDeposit(false)}
        >
          <View style={styles.checkboxBox}>
            {isDeposit === false && <View style={styles.checkboxTick} />}
          </View>
          <Text style={styles.checkboxLabel}>Expense</Text>
        </Pressable>
      </View>

      <Button title="Add Transaction" onPress={handleTransactionAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: '500',
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
  },
  checkboxContainer: {
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  checkboxBox: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: 'white',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxTick: {
    height: 12,
    width: 12,
    backgroundColor: 'dodgerblue',
  },
  checkboxLabel: {
    color: 'white',
    fontSize: 16,
  },
});