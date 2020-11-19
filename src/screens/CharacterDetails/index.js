import React, { useEffect } from 'react'
import styled from 'styled-components'
import CharacterDetails from '../../components/CharactersDetails'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacter } from '../../actions/characters'

const index = props => {
  const id = props.match.params.id
  const dispatch = useDispatch()
  const character = useSelector(state => state.characters.characterDetails)
  useEffect(() => {
    dispatch(getCharacter(id))
    console.log(character)
  }, [])

  return (
    <DivStyled>
      {character ? <CharacterDetails details={character} /> : null}
    </DivStyled>
  )
}

const DivStyled = styled.div`
  background-color: white;
`

export default index
