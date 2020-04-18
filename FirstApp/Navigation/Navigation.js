// Navigation/Navigation.js
import React from 'react'
import { StyleSheet, Image } from 'react-native'

// composants des plateformes, cela ne fonctionne pas! //
// import { ...,Platform } from 'react-native'

// composants des navigations //
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

// composants personnalisés //
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'
import Test from '../Components/Test'

const SearchStackNavigator = createStackNavigator({
  Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: FilmDetail,
    navigationOptions: {
      title: 'Détails'
    }
  }
})
const FavoritesStackNavigator = createStackNavigator({
  Favorites: { // Ici j'ai appelé la vue "Favorites" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris'
    }
  },
  FilmDetail: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: FilmDetail,
    navigationOptions: {
      title: 'Détails'
    }
  }
})
const MoviesTabNavigator = createBottomTabNavigator({
  Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: SearchStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
                  source= {require('../Images/ic_search.png')}
                  style={styles.tab_icon}
                />
      }
    }
  },
  Favorites: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: FavoritesStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
                  source= {require('../Images/ic_favorite.png')}
                  style={styles.tab_icon}
                />
      }
    }
  },
  Test: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Test,
    navigationOptions: {
      title: 'Test!'
    }
  }
},
{
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
      inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
      showLabel: false, // On masque les titres
      showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
    }
  }
)

const styles = StyleSheet.create({

  // Définir par  condition sur les platformes // 
  tab_icon: {

    width: Platform.OS == 'ios' ? 30 : 50,
    height: Platform.OS == 'ios' ? 30 : 50,
  },

  // Définir par choix de platformes // 
  tab_icon: {
    ...Platform.select({
      ios: {
        width: 30,
        height: 30
      },      
      android: {
        width: 20,
        height: 20
      },
    })
  },

})

export default createAppContainer(MoviesTabNavigator)

