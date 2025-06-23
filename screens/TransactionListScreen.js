import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Button,
  Pressable,

} from 'react-native';

export default function TransactionListScreen({ navigation }) {
  const [transactions, setTransactions] = useState([
    {
      id: '1', name: 'Domino’s Pizza', amount: 18.99, isDeposit: false, type: 'Food',
      date: '2025-06-21',
      location: 'Toronto',
      status: 'Completed',
    },

    {
      id: '2', name: 'Starbucks Coffee', amount: 5.00, isDeposit: false,
      type: 'Food',
      date: '2025-06-20',
      location: 'Toronto',
      status: 'Completed',
    },

    {
      id: '3', name: 'Event Payment', amount: 100.00, isDeposit: true, type: 'Income',
      date: '2025-06-19',
      location: 'Toronto',
      status: 'Completed',
    },

    {
      id: '4', name: 'Anytime Fitness Fee', amount: 29.99, isDeposit: false, type: 'Gym',
      date: '2025-06-18',
      location: 'Toronto',
      status: 'Completed',
    },

    {
      id: '5', name: 'Work Pay', amount: 200.0, isDeposit: true, type: 'Income',
      date: '2025-06-17',
      location: 'Toronto',
      status: 'Completed',
    },

    {
      id: '6', name: 'Indian Groceries', amount: 65.00, isDeposit: false, type: 'Food',
      date: '2025-06-16',
      location: 'Toronto',
      status: 'Completed',
    },

  ]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Logout" onPress={() => navigation.replace('LoginScreen')} />
      ),

    });}, [navigation]);

  const calculateBalance = () => {
    let total = 0;
    for (let i = 0; i < transactions.length; i++)
     {
      const item = transactions[i];
      total += item.isDeposit ? item.amount : -item.amount;
    }

    return total.toFixed(2);
  };

  const deleteTransaction = (id) => {

    Alert.alert('Delete', 'This item will be permanently deleted. Are you sure? ',

    [ { text: 'Cancel' },
      { text: 'Delete', onPress: () => {
          const newList = transactions.filter((item) => item.id !== id);
          setTransactions(newList);
        },
      },

    ]);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('TransactionDetail', { transaction: item })} >
      <View style={styles.transactionItem}>

        <View>
          <Text style={styles.transactionName}>{item.name} 
          </Text>
          <Text style={item.isDeposit ? styles.deposit : styles.expense}>
            {item.isDeposit ? 'Deposit' : 'Expense'}

          </Text>
        </View>

        <View style={styles.rightSide}>

          <Text
            style={[ styles.amount, item.isDeposit ? styles.amountDeposit : styles.amountExpense,]} >
            {item.isDeposit ? '+' : '-'}${item.amount.toFixed(2)}
          </Text>

          <TouchableOpacity onPress={() => deleteTransaction(item.id)}>
            <Text style={styles.delete}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.balance}>Total Balance: ${calculateBalance()}</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}/>

      <Pressable
        style={styles.addButton}
        onPress={() =>
          navigation.navigate('NewTransaction', {
            onAdd: (newTransaction) => { newTransaction.date = new Date().toISOString().split('T')[0];
              newTransaction.location = 'Toronto';
              newTransaction.status = 'Completed';

              setTransactions((prev) => [newTransaction, ...prev]);
            },
          })
        }
      >
        <Text style={styles.addButtonText}>Add Transaction</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'black',
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'greenyellow',
    textAlign: 'center',
    backgroundColor: '#1e1e1e',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'gray',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'darkslateblue',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  transactionName: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  deposit: {
    fontSize: 14,
    color: 'lightgreen',
    marginTop: 4,
  },
  expense: {
    fontSize: 14,
    color: 'lightcoral',
    marginTop: 4,
  },
  rightSide: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  amountDeposit: {
    color: 'lightgreen',
  },
  amountExpense: {
    color: 'salmon',
  },
  delete: {
    marginTop: 6,
    color: 'crimson',
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: 'dodgerblue',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
});