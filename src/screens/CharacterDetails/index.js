import React, { useEffect, useSelector } from 'react'
import styled from 'styled-components'
// import CharacterDetails from '../../components/EpisodesList'
import Background from '../../assets/img/background.jpg'
import { useDispatch } from 'react-redux'
import { getCharacter } from '../../actions/characters'

const index = props => {
  const id = props.match.params.id
  const dispatch = useDispatch()
  const character = useSelector(state => state.characters.characterDetails)
  useEffect(() => {
    dispatch(getCharacter(id))
    console.log(character)
  }, [])

  return <DivStyled>{/* <CharacterDetails details={character} /> */}</DivStyled>
}

const DivStyled = styled.div`
  background: url(${Background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`

export default index
