import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Search from './Components/Search'
import Footer from './Components/Footer'
export default function App() {
  return (
    // la vue principale //
    <View >
      <Search/>
      <Footer/>    
    </View>
  );
}

