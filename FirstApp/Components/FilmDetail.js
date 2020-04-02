// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView, ActivityIndicator } from 'react-native'
import { getImageFromApi, getFilmDetailFromApi }  from '../API/TMDBApi'
import moment from 'moment'
import numeral from 'numeral'

class FilmDetail extends React.Component {
    // constructeur de l'objet //
    constructor(props){
      super(props);
      this.state = {
        film: undefined, // le film actif
        isLoading: true, // en cours de chargement?
      }
    }


    // retourner l'affichage de la barre de chargement //
    _displayLoading() {
      if(this.state.isLoading){
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
          )
      }
    }
    // charger les détails du film à partir de l'API//
    componentDidMount() {
      console.log("componentDidMount");
      getFilmDetailFromApi(this.props.navigation.state.params.idFilm.id).then(data => {
          // get movie details from API //
          console.log(data);
          this.setState({
            film: data,
            isLoading:false, 
          });
      })

      // get movie static //
      // this.setState({
      //   film: this.props.navigation.state.params.idFilm,
      //   isLoading:false, 
      // });
    }

    // retourner l'affichage du film //
    _displayFilm() {
      // get movie static //
      //const active_film = this.props.navigation.state.params.idFilm

      // get movie details from api //
      const active_film = this.state.film

      // return the movie description //
      if(active_film != undefined){
        return (
          <ScrollView style={styles.scrollview_container}>
            <Image
              style={styles.image}
              source={{uri: getImageFromApi(active_film.backdrop_path)}}
            />
            <Text style={styles.title_text}>{active_film.title}</Text>
            <Text style={styles.description_text}>{active_film.overview}</Text>
            <Text style={styles.default_text}>Sorti le {moment(new Date(active_film.release_date)).format('DD/MM/YYYY')}</Text>
            <Text style={styles.default_text}>Note : {active_film.vote_average} / 10</Text>
            <Text style={styles.default_text}>Nombre de votes : {active_film.vote_count}</Text>
            <Text style={styles.default_text}>Budget : {numeral(active_film.budget).format('0,0[.]00 $')}</Text>
            <Text style={styles.default_text}>Genres : { 
                active_film.genres.map(
                  function(genre){
                    return genre.name;
                  }).join(' / ')
              }
            </Text>
            <Text style={styles.default_text}>
              Production de : {active_film.production_companies.map(
                  function(company){
                return company.name;
              }).join(', ')
            }
            </Text>
            <Text style={styles.default_text}>
              Pays : {active_film.production_countries.map(function(country){
                return country.iso_3166_1;
              }).join(' & ') }
            </Text>

          </ScrollView>
        )
      }
    }


  render() {
  	//console.log(this.props)

    console.log("FilmDetail --> render");
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
        {this._displayFilm()}
      </View>
    )
    
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  },
  image: {
    height: 169,
    margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  }
})

export default FilmDetail