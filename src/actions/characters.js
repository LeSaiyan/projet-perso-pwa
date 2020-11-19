import { getCharactersList, getCharacterDetails } from '../services'

export const DISPLAY_CHARACTERS = 'DISPLAY_CHARACTERS'
export const DISPLAY_CHARACTER_DETAILS = 'DISPLAY_CHARACTER_DETAILS'

export const displayCharacters = characters => ({
  type: DISPLAY_CHARACTERS,
  payload: characters
})

export const displayCharacterDetails = characterDetails => ({
  type: DISPLAY_CHARACTER_DETAILS,
  payload: characterDetails
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
      dispatch(displayCharacterDetails(res.data))
    })
    .catch(err => err)
}
