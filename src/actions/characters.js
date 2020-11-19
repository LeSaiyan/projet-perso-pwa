import { getCharactersList } from '../services'

export const DISPLAY_CHARACTERS = 'DISPLAY_CHARACTERS'

export const displayEpisodes = characters => ({
  type: DISPLAY_CHARACTERS,
  payload: characters
})

export const getCharacters = () => dispatch => {
  getCharactersList()
    .then(res => {
      dispatch(displayEpisodes(res.data.characters))
    })
    .catch(err => err)
}
