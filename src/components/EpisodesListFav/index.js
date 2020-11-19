import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import EpisodeCard from '../EpisodeCard'

const EpisodesListFav = () => {
  return (
    <DivStyled>
      <UlStyled>
        {episodes.map((episode, index) => (
          <EpisodeCard
            key={index}
            id={episode.episode_id || episode.id}
            title={episode.title}
            title_japanese={episode.title_japanese}
          />
        ))}
      </UlStyled>
    </DivStyled>
  )
}

EpisodesListFav.propTypes = {
  episodeList: PropTypes.array,
  episodeTitle: PropTypes.string
}
const DivStyled = styled.div``
const UlStyled = styled.ul`
  padding: 0;
  padding: 10px;
`

export default EpisodesListFav
