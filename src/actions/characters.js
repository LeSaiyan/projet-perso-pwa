import { getCharactersList, getCharacterDetails } from '../services'

export const DISPLAY_CHARACTERS = 'DISPLAY_CHARACTERS'
export const DISPLAY_CHARACTER = 'DISPLAY_CHARACTER'

export const displayCharacters = characters => ({
  type: DISPLAY_CHARACTERS,
  payload: characters
})

export const displayCharacter = character => ({
  type: DISPLAY_CHARACTER,
  payload: character
})

export const getCharacters = () => dispatch => {
  getCharactersList()
    .then(res => {
      dispatch(displayCharacters(res.data.characters))
    })
    .catch(err => err)
}

export const getCharacter = id => dispatch => {
  getCharacterDetails(id)
    .then(res => {
      dispatch(displayCharacter(res.data))
    })
    .catch(err => err)
}
