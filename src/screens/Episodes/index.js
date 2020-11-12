import React, { useEffect, useState } from 'react'
import { getEpisodesList } from '../../services'
import styled from 'styled-components'
import EpisodesList from '../../components/EpisodesList'
import Background from '../../assets/img/background.jpg'

const index = () => {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    getEpisodesList().then(res => {
      const items = res.data.episodes
      setEpisodes(items)
    })
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
