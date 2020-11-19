import { getEpisodesList } from '../services'

export const DISPLAY_EPISODES = 'DISPLAY_EPISODES'

export const displayEpisodes = episodes => ({
  type: DISPLAY_EPISODES,
  payload: episodes
})

export const getEpisodes = () => dispatch => {
  getEpisodesList()
    .then(res => {
      dispatch(displayEpisodes(res.data.episodes))
    })
    .catch(err => err)
}
