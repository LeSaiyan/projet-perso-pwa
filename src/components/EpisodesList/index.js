import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import EpisodeCard from '../EpisodeCard'

const EpisodesList = props => {
  return (
    <DivStyled>
      <UlStyled>
        {props.episodeList.map(episode => (
          <EpisodeCard
            key={episode.episode_id}
            title={episode.title}
            japTitle={episode.title_japanese}
          />
        ))}
      </UlStyled>
    </DivStyled>
  )
}

EpisodesList.propTypes = {
  episodeList: PropTypes.array,
  episodeTitle: PropTypes.string
}
const DivStyled = styled.div``
const UlStyled = styled.ul`
  padding: 0;
  padding: 10px;
`

export default EpisodesList
