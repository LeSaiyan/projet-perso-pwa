import { DISPLAY_EPISODES } from '../actions/episodes'

const initialState = {
  episodesList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_EPISODES:
      return {
        ...state,
        episodesList: action.payload
      }
    default:
      return state
  }
}
