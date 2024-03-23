import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function PaginaInicial() {
  return (
    <View style={styles.container}>
      <Text style={styles.colorTitle}>HOME</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#db7575',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorTitle:{
    color: "#fff",
    fontSize: 30,
    fontWeight: 'bold'
  }
});
