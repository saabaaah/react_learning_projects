import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

import Navigation from './Navigation/Navigation'
import Footer from './Components/Footer'

// importer les elements du redux //
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

export default function App() {
  return (
    // la vue principale //
    <Provider store={Store}>
      <View style={styles.main_container} >
        <Navigation/>
        <Footer/>    
      </View>
    </Provider>
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
