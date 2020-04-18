// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text } from 'react-native'
import FilmList from './FilmList'
import { connect } from 'react-redux'

class Favorites extends React.Component {

  constructor(props){
  	super(props)
  }
  render() {
    return (
      <FilmList
            films={this.props.favoritesFilm}
            navigation={this.props.navigation}
            favoriteList={true}
            test={"List favoris"}
        />
    )
  }
}

const styles = StyleSheet.create({})

const mapStateToProps = (state) => {
	return {
		favoritesFilm: state.favoritesFilm,
	}
}
export default connect(mapStateToProps)(Favorites)