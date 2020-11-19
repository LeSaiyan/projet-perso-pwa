import { TOGGLE_FAVORITES } from '../actions/favorites'

const initialState = {
  favoritesEpisodes: []
}

const favoritesReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES: {
      let index = state.favoritesEpisodes.findIndex(
        i => i.id === action.payload.id
      )
      let newFav
      if (index === -1) newFav = [...state.favoritesEpisodes, action.payload]
      else {
        newFav = state.favoritesEpisodes.filter(e => e.id != action.payload.id)
      }

      return {
        ...state,
        favoritesEpisodes: newFav
      }
    }
    default:
      return state
  }
}

export default favoritesReducers
