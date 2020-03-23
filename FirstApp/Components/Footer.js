// Components/Footer.js
import React from 'react'

// importer les composant basiques (web)
import { StyleSheet, View, TextInput, Text } from 'react-native'


class Footer extends React.Component {
    render() {
        return (
            // Ici on rend à l'écran les éléments graphiques de notre component custom Footer
            <View style={footer_style.container}>
            	<Text style={[footer_style.text, { marginBottom: 100 }]}> ReactNative First App! by sabah.HM</Text>  
            </View>
        )
    }
}

// Exporter cet element
export default Footer

const footer_style = StyleSheet.create({
  container: {
    marginTop: 200,
    paddingTop: 200,
    backgroundColor: '#EEE',
    justifyContent: 'center',
  },
  text: {
  	//marginTop: 20,
    //height: 50,
    textAlign: 'center',
  },
});