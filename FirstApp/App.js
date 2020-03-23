import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Search from './Components/Search'
export default function App() {
  return (
    // la vue principale //
    <View >
      <Search/>
      <Text style={styles.text}>Hello World! by sabah.HM</Text>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: '#DDD',
  }
});
