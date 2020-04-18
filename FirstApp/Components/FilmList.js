// Component/FilmList.js

import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import FilmItem from './FilmItem'

import { connect } from 'react-redux'

class FilmList extends React.Component {
	
	// Contructeur //
    constructor(props){
        super(props);
        console.log("FilmList :: ")
        console.log(props)

        // initialiser la liste des films à Vide
        this.state = {
            films: [],
        };
    }
	// afficher le détail d'un film //
    _displayDetailForFilm = (idFilm) => {
        //console.log("Display film with id " + idFilm);
        this.props.navigation.navigate("FilmDetail", {idFilm: idFilm});
    }

	render() {
		return (
			<FlatList
				  style= {styles.film_list}
                  data={this.props.films} 
                  extraData={this.props.favoritesFilm} 
                  keyExtractor={(item) => item.id.toString()} // ajouter des clés 
                  renderItem= { ({item}) => (
                    <FilmItem 
                        film={item} 
                        isFilmFavorite={(this.props.favoritesFilm.findIndex(
                            film => film.id === item.id) !== -1)? true: false}
                        displayDetailForFilm={this._displayDetailForFilm} 
                    />)}
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    // charger les pages restantes
                    if (!this.props.favoriteList && this.props.page < this.props.totalPages){
                        this._loadFilms();
                    }
                    console.log("onEndReached");
                  }}
                />
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
    flex: 1,
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

// On connecte le store Redux, ainsi que les films favoris du state de notre application, à notre component Search
const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(FilmList)

