import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getCharactersList } from '../../services'
import CharactersList from '../../components/CharactersList'

const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharactersList().then(res => {
      const items = res.data.characters
      setCharacters(items)
    })
  }, [])

  return (
    <DivStyled>
      <CharactersList charactersList={characters}></CharactersList>
    </DivStyled>
  )
}

Characters.propTypes = {}
const DivStyled = styled.div``

export default Characters
