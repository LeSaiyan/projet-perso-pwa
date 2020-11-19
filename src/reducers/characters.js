import { DISPLAY_CHARACTERS } from '../actions/characters'

const initialState = {
  charactersList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_CHARACTERS:
      return {
        ...state,
        charactersList: action.payload
      }
    default:
      return state
  }
}
