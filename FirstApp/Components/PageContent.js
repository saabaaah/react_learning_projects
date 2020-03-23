// Components/PageContent.js
import React from 'react'

// importer les composant basiques (web)
import { StyleSheet, View, TextInput, Text } from 'react-native'


class PageContent extends React.Component {
    render() {
        return (
            // Ici on rend à l'écran les éléments graphiques de notre component custom PageContent
            <View style={page_style.container}>
            	<Text style={[page_style.text]}> ReactNative First App!</Text>  
            </View>
        )
    }
}

// Exporter cet element
export default PageContent

const page_style = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: '#AEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
  	//marginTop: 20,
    //height: 50,
    flex: 0,
    textAlign: 'center',
  },
});