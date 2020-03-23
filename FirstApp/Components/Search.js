// Components/Search.js
import React from 'react'

// importer les composant basiques (web)
import { StyleSheet, View, TextInput, Button } from 'react-native'


class Search extends React.Component {
    render() {
        return (
            // Ici on rend à l'écran les éléments graphiques de notre component custom Search
            <View >
            	<TextInput style={search_style.text_input} placeholder='Titre du film' />
            	<Button title='Rechercher' onPress={() => {}} />
            </View>
            // ====== equivalent à //
            /*
			React.createElement(View, {},
			  	React.createElement(TextInput, {placeholder: "Titre du film"}),
			    React.createElement(Button, {title: "Rechercher", onPress: () => {}})
			)
            */
        )
    }
}

// Exporter cet element
export default Search

const search_style = StyleSheet.create({
  container: {
    backgroundColor: '#DDD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_input: {
  	marginTop: 20,
  },
});