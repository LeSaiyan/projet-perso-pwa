import React, { useEffect } from 'react'
import styled from 'styled-components'
import EpisodesList from '../../components/EpisodesList'
import { useDispatch, useSelector } from 'react-redux'
import { getEpisodes } from '../../actions/episodes'

const index = () => {
  const dispatch = useDispatch()
  const episodes = useSelector(state => state.episodes.episodesList)
  useEffect(() => {
    dispatch(getEpisodes())
  }, [])

  return (
    <DivStyled>
      {episodes.length > 0 ? (
        <EpisodesList episodeList={episodes} />
      ) : (
        <DivPasDeConnexionStyled>Pas de connexion</DivPasDeConnexionStyled>
      )}
    </DivStyled>
  )
}

const DivStyled = styled.div`
  background-color: #f7ede3;
`
const DivPasDeConnexionStyled = styled.p`
  background-color: white;
`

export default index
