import { TOGGLE_FAVORITES } from '../actions/favorites'

const initialState = {
  favoritesEpisodes: []
}

const favoritesReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES: {
      console.log(action.payload)
      let favorites = state.favoritesEpisodes
      const favorite = action.payload
      let index = favorites.findIndex(i => i.id === favorite.id)
      if (index === -1) {
        favorites.push(favorite)
      } else if (index > -1) {
        favorites.splice(index, 1)
      }
      console.log(favorites)
      return {
        ...state,
        favoritesEpisodes: favorites
      }
    }
    default:
      return state
  }
}

export default favoritesReducers
