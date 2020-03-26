// Components/Search.js
import React from 'react'

// importer les composant basiques (web)
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native'
import { getFilmsFromApiWithSearchedText }  from '../API/TMDBApi'

import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Search extends React.Component {

    // Contructeur //
    constructor(props){
        super(props);

        // initialiser la liste des films à Vide
        this._films = [];
    }

    // Récupérer la liste des films depuis l'API //
    _loadFilms(){
        getFilmsFromApiWithSearchedText("star").then(data => {
            // sauvegarder les films dans l'attribut //
            this._films = data.results;
            this.forceUpdate();
        });
    }

    // Faire le rendu de la page de recherche //
    render() {
        return (
            // Ici on rend à l'écran les éléments graphiques de notre component custom Search
            <View style={search_style.container}>
            	<TextInput 	style={search_style.text_input} 
            				placeholder='Titre du film' />
            	<Button
            			title='Rechercher' 
            			onPress={() => this._loadFilms()} />
                <FlatList
                  data={this._films} 
                  keyExtractor={(item) => item.id.toString()} // ajouter des clés 
                  renderItem= {({item}) => <FilmItem film={item}/>}
              />
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