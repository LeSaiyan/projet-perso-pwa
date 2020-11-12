import axios from 'axios'
import Instance from './axios-anime'

const getEpisodesList = () => {
  return Instance.get(`anime/154/episodes`)
}

// const getMangaList = () => {
//   return Instance.get(`manga/50/characters`);
// };

// const getCharacterDetails = (id) => {
//   return Instance.get(`character/${id}`);
// };

// const searchCharacters = (name) => {
//   return Instance.get(`search/character?q=${name}`);
// };

const connect = data => {
  return axios.post('https://easy-login-api.herokuapp.com/users/login', data)
}

export { connect, getEpisodesList }
