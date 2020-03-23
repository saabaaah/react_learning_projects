// Components/Search.js
import React from 'react'

// importer les composant basiques (web)
import { StyleSheet, View, TextInput, Button } from 'react-native'


class Search extends React.Component {
    render() {
        return (
            // Ici on rend à l'écran les éléments graphiques de notre component custom Search
            <View style={search_style.container}>
            	<TextInput 	style={search_style.text_input} 
            				placeholder='Titre du film' />
            	<Button style={search_style.text_input} 
            			title='Rechercher' 
            			onPress={() => {}} />
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
  	flex: 1,
  	flexDirection: 'row',
    backgroundColor: '#DDD',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  text_input: {
  	flex: 1,
  },
});