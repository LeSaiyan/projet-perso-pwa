import { combineReducers } from 'redux'

import favorites from './favorites'
import episodes from './episodes'
import characters from './characters'

export default combineReducers({
  favorites,
  episodes,
  characters
})
