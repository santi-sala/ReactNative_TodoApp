import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Banner() {
  return (
    <View style={styles.banner}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 80,
    paddingTop: 40,
    backgroundColor: 'cadetblue',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
