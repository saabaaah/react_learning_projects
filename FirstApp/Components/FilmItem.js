// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { getImageFromApi }  from '../API/TMDBApi'

class FilmItem extends React.Component {
  render() {

    // RÉCUPÉRER LES PROPRIÉTÉS // 
  	const active_film = this.props.film
    const displayDetailForFilm = this.props.displayDetailForFilm

    console.log(displayDetailForFilm)
    return (
      <TouchableOpacity style={styles.main_container}
        onPress={() => displayDetailForFilm(active_film)}>
        <Image
          style={styles.image}
          source={{uri: getImageFromApi(active_film.poster_path)}}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{active_film.title}</Text>
            <Text style={styles.vote_text}>{active_film.vote_average}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{active_film.overview}</Text>
            {/* numberOfLines -> couper un texte trop long */}
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Sorti le {active_film.release_date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: '#DDD'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default FilmItem