import React, { useEffect } from 'react'
import styled from 'styled-components'
import EpisodesList from '../../components/EpisodesList'
import Background from '../../assets/img/background.jpg'
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
      <EpisodesList episodeList={episodes} />
    </DivStyled>
  )
}

const DivStyled = styled.div`
  background: url(${Background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`

export default index
