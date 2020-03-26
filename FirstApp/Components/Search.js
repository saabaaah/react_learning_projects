// Components/Search.js
import React from 'react'

// importer les composant basiques (web)
import { StyleSheet, View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native'
import { getFilmsFromApiWithSearchedText }  from '../API/TMDBApi'

import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Search extends React.Component {

    // Contructeur //
    constructor(props){
        super(props);

        // initialiser la liste des films à Vide
        this.state = {
            films: [],
            isLoading: false, // au debut aucun chargement 
        };
        // initialiser le mot cherché à nul
        this.searchedText = "";
        // PROPS :: en utilisant les props ( à eviter) 
        //this._films = [];
    }

    // suivre le texte du mot à chercher //
    _searchedTextChanged(text){
        this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
    }

    // Récupérer la liste des films depuis l'API //
    _loadFilms(){
        console.log("\n Recherche : "+this.searchedText)
        this.setState({
                    isLoading: true, // Début du chargement 
                });
        // verifier le mot cherché //
        if(this.searchedText.length > 0){
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
                // sauvegarder les films dans l'attribut //
                this.setState({
                    films: data.results,
                    isLoading: false, // Arrêt du chargement
                });
                /* PROPS :: en utilisant les props ( à eviter) 
                this._films = data.results;
                this.forceUpdate();
                */
            });
        }
    }

    // afficher une barre de preogression lors le chargement //
    _displayLoading(){
        if(this.state.isLoading){
            // si on est au cours de chargement, retourner un indicateur :
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
                )
        }
    }

    // Faire le rendu de la page de recherche //
    render() {
        console.log("\n>>>> RENDER - SEARCH <<<<");
        console.log("-Chargement : "+this.state.isLoading)
        return (
            // Ici on rend à l'écran les éléments graphiques de notre component custom Search
            <View style={styles.container}>
            	<TextInput 	style={styles.text_input} 
            				placeholder='Titre du film' 
                            onChangeText={(text) => this._searchedTextChanged(text)}
                            onSubmitEditing={() => this._loadFilms()}
                            //defaultValue='Hello'
                            returnKeyType='search' //NORMS : done, go, next, search, send,
                />
            	<Button
            			title='Rechercher' 
            			onPress={() => this._loadFilms()} />
                <FlatList
                  data={this.state.films} 
                  keyExtractor={(item) => item.id.toString()} // ajouter des clés 
                  renderItem= {({item}) => <FilmItem film={item}/>}
                />
                { this._displayLoading() }
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

const styles = StyleSheet.create({
  container: {
  	flex: 9,
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
  film_list: {
    flex: 8,
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Exporter cet element
export default Search