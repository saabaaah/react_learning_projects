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
            	<Button
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

const search_style = StyleSheet.create({
  container: {
  	flex: 0,
    marginTop: 20,
  },
  text_input: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
  },
});

// Exporter cet element
export default Search