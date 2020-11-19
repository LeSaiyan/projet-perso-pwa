import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CharacterCard from '../CharacterCard'

const CharactersList = props => {
  return (
    <DivStyled>
      <UlStyled>
        {props.charactersList.map((character, index) => (
          <CharacterCard
            key={index}
            id={character.mal_id}
            name={character.name}
            image={character.image_url}
          />
        ))}
      </UlStyled>
    </DivStyled>
  )
}

CharactersList.propTypes = {
  charactersList: PropTypes.array,
  episodeTitle: PropTypes.string
}
const DivStyled = styled.div``
const UlStyled = styled.ul`
  padding: 0;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`

export default CharactersList
