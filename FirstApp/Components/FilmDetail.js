// Components/FilmDetail.js

import React from 'react'
import {  StyleSheet, 
          View, 
          Text, 
          Button, 
          Image, 
          ScrollView, 
          ActivityIndicator, 
          TouchableOpacity,
          Share,
          Platform } from 'react-native'
import { getImageFromApi, getFilmDetailFromApi }  from '../API/TMDBApi'

// les composants personnalisés //
import moment from 'moment'
import numeral from 'numeral'
import { connect } from 'react-redux'

class FilmDetail extends React.Component {

  // créer un bouton de menu pour le partage //
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state

    // verifier le film & la plateforme //
    if(params.film != undefined && Platform.OS == 'ios'){
      return {
        headerRight: <TouchableOpacity
                        style = {styles.share_touchable_headerrightbutton}
                        onPress = {() => params.shareFilm()}>
                        <Image
                          style={styles.share_image}
                          source={require('../Images/ic_share.ios.png')}
                        />
                      </TouchableOpacity>
      }
    }
  }
  // constructeur de l'objet //
  constructor(props){
    super(props);
    this.state = {
      film: undefined, // le film actif
      isLoading: true, // en cours de chargement?
    }

    this._shareFilm = this._shareFilm.bind(this)
  }

  // mettre à jour les données de la navigation //
  _updateNavigationParams(){
    this.props.navigation.setParams({
      shareFilm: this._shareFilm,
      film: this.state.film,
    })
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
    componentDidUpdate() {
      console.log("componentDidUpdate : ")
      console.log(this.props.favoritesFilm)
    }

    // charger les détails du film à partir de l'API//
    componentDidMount() {
      console.log("componentDidMount")
      // verifier si le film est recuperé //
      const favoriteFilmIndex = this.props.favoritesFilm.findIndex(item => item.id === this.props.navigation.state.params.idFilm)
      if(favoriteFilmIndex !== -1 ){
        this.setState({
          film: this.props.favoritesFilm[favoriteFilmIndex]
        }, () => { this._updateNavigationParams() })
        return
      }
      // mettre à jour //
      this.setState({ isLoading: true })
      getFilmDetailFromApi(this.props.navigation.state.params.idFilm.id).then(data => {
          // get movie details from API //
          console.log(data);
          this.setState({
            film: data,
            isLoading:false, 
          }, () => { this._updateNavigationParams() })
      })

      // get movie static //
      // this.setState({
      //   film: this.props.navigation.state.params.idFilm,
      //   isLoading:false, 
      // });
    }
    _toggleFavorite() {
      const action = { type: "TOGGLE_FAVORITE", value: this.state.film }
      this.props.dispatch(action)
      console.log(action);
    }

    // Affichage des images favoris/non favoris //
    _displayFavoriteImage() {
        var sourceImage = require('../Images/ic_favorite_border.png')
        if (this.props.favoritesFilm.findIndex(item => item.id === this.state.film.id) !== -1) {
          // Film dans nos favoris
          sourceImage = require('../Images/ic_favorite.png')
        }
        return (
          <Image
            style={styles.favorite_image}
            source={sourceImage}
          />
        )
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
            <TouchableOpacity
              style={styles.favorite_container}
              onPress={()=> this._toggleFavorite()}>
              {this._displayFavoriteImage()}
            </TouchableOpacity>
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

    // partager ce film //
    _shareFilm(){
      const { film } = this.state
      Share.share({title:film.title, message: film.overview})
    }
    
    // afficher un bouton android flottant //
    _displayFloatingActionButton(){
      const { film } = this.state
      if (film != undefined && Platform.OS === 'ios') { // Uniquement sur Android et lorsque le film est chargé
          return (
            <TouchableOpacity
              style={styles.share_touchable_floatingactionbuttion}
              onPress={() => this._shareFilm()}>
              <Image
                style={styles.share_image}
                source={require('../Images/ic_share.android.png')} />
            </TouchableOpacity>
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
        {this._displayFloatingActionButton()}
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
  },
  favorite_container: {
    alignItems: 'center',
  },
  favorite_image: {
    width: 40,
    height: 40,
  },
  share_image: {
    width: 30,
    height: 30,
  },
  share_touchable_floatingactionbuttion: {
    // positionning 
    position: 'absolute',
    width: 60,
    height: 60,
    right: 10,
    bottom: 10,
    paddingLeft: 5,
    // forme 
    borderRadius: 30,
    backgroundColor: '#ef5350',
    alignItems: 'center',
    justifyContent: 'center',
  },
  share_touchable_headerrightbutton: {
    marginRight: 8,
  }
})

// Acces au state global //
const mapStateToProps = (state) => {
  console.log("mapStateToProps");
  console.log(state);
  return{
    favoritesFilm: state.favoritesFilm,
  }
}

// lancement de dispatch !!!!
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FilmDetail)

