import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

import Navigation from './Navigation/Navigation'
import Footer from './Components/Footer'
export default function App() {
  return (
    // la vue principale //
    <View style={styles.main_container} >
      <Navigation/>
      <Footer/>    
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#EFF'
  },
  text: {
    backgroundColor: '#DDD',
  }
});
