// Components/PageContent.js
import React from 'react'

// importer les composant basiques (web)
import { FlatList, StyleSheet, View, TextInput, Text } from 'react-native'

// cela me pause une erreur 
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class PageContent extends React.Component {
    render() {
        return (
            // Ici on rend à l'écran les éléments graphiques de notre component custom PageContent
            <View style={page_style.container}>
            	{/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
              <FlatList
                  data={films} 
                  keyExtractor={(item) => item.id.toString()} // ajouter des clés 
                  renderItem= {({item}) => <FilmItem film={item}/>}
              />
            </View>
        )
    }
}

// Exporter cet element
export default PageContent

const page_style = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 9,
  },
  text: {
  	//marginTop: 20,
    //height: 50,
    flex: 0,
    textAlign: 'center',
  },
});