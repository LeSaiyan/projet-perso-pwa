import axios from 'axios'
// import Instance from './axios-deezer'

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

export { connect }
