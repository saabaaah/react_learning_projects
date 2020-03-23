import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Search from './Components/Search'
import PageContent from './Components/PageContent'
import Footer from './Components/Footer'
export default function App() {
  return (
    // la vue principale //
    <View style={styles.main_container} >
      <Search/>
      <PageContent/>    
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
