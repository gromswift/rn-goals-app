import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10
  }
});

export default GoalItem;
