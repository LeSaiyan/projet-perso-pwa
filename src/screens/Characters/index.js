import React, { useEffect } from 'react'
import styled from 'styled-components'
import CharactersList from '../../components/CharactersList'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from '../../actions/characters'

const Characters = () => {
  const dispatch = useDispatch()
  const characters = useSelector(state => state.characters.charactersList)
  useEffect(() => {
    dispatch(getCharacters())
  }, [])

  return (
    <DivStyled>
      <CharactersList charactersList={characters} />
    </DivStyled>
  )
}

Characters.propTypes = {}
const DivStyled = styled.div`
  background-color: #f7ede3;
`

export default Characters
