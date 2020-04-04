// Store/Reducers/favoriteReducer.js
const initialState = { favoritesFilm: [] } // initiali state //


function toggleFavorite(state = initialState, action) {
	let nextState
	switch (action.type) {
		case 'TOGGLE_FAVORITE':
			// récupérer l'indice du film //
			const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
			// verifier l'existance du film  comme favoris //
			if(favoriteFilmIndex !== -1){
				nextState = {
					...state, 
					favoritesFilm: state.favoritesFilm.filter( (item, index) => index !== favoriteFilmIndex)
				}
			}else{
				// ce film n'est pas en favoris //
				nextState = {
					...state,
					favoritesFilm: [...state.favoritesFilm, action.value]
				}
			}
			// retourner l'etat (nouveau ou l'original) //
			return nextState || state
		default:
			return state
	}
}

export default toggleFavorite
