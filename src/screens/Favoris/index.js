import React from 'react'
import styled from 'styled-components'
import EpisodesList from '../../components/EpisodesList'
import { useSelector } from 'react-redux'

const Favorites = () => {
  let episodes = useSelector(state => state.favorites.favoritesEpisodes)

  return (
    <DivStyled>
      <EpisodesList episodeList={episodes} />
    </DivStyled>
  )
}

const DivStyled = styled.div`
  background-color: #f7ede3;
  min-height: 100vh;
  height: auto;
`

export default Favorites
