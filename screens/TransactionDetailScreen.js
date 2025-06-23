import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function TransactionDetailScreen({ route }) {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transaction Details</Text>

      <View style={styles.detailCard}>
        <Text style={styles.label}>Date</Text>
        <Text style={styles.value}>{transaction.date}</Text>
      </View>

      <View style={styles.detailCard}>
        <Text style={styles.label}>Amount</Text>
        <Text
          style={[
            styles.value,
            transaction.isDeposit ? styles.deposit : styles.expense,
          ]}>
            
          {transaction.isDeposit ? '+' : '-'}${transaction.amount.toFixed(2)}
        </Text>
      </View>

      <View style={styles.detailCard}>
        <Text style={styles.label}>Location</Text>
        <Text style={styles.value}>{transaction.location}</Text>
      </View>

      <View style={styles.detailCard}>
        <Text style={styles.label}>Transaction Type</Text>
        <Text style={styles.value}>{transaction.type}</Text>
      </View>

      <View style={styles.detailCard}>
        <Text style={styles.label}>Status</Text>
        <Text style={styles.value}>{transaction.status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 28,
  },
  detailCard: {
    backgroundColor: '#1c1c1c',
    padding: 14,
    borderRadius: 10,
    marginBottom: 14,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: 'lightgray',
  },
  value: {
    fontSize: 19,
    marginTop: 6,
    color: 'white',
  },
  deposit: {
    color: 'lightgreen',
  },
  expense: {
    color: 'lightcoral',
  },
});