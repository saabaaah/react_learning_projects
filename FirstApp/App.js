import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Search from './Components/Search'
import Footer from './Components/Footer'
export default function App() {
  return (
    // la vue principale //
    <View style={styles.main_container} >
      <Search/>
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
