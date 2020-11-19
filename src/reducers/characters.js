import {
  DISPLAY_CHARACTERS,
  DISPLAY_CHARACTER_DETAILS
} from '../actions/characters'

const initialState = {
  charactersList: [],
  characterDetails: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_CHARACTERS:
      return {
        ...state,
        charactersList: action.payload
      }
    case DISPLAY_CHARACTER_DETAILS:
      return {
        ...state,
        characterDetails: action.payload
      }

    default:
      return state
  }
}
