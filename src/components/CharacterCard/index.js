import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CharacterCard = props => {
  return (
    <DivStyled>
      <Link to={`/characters/${props.id}`}>
        <ImgStyled src={props.image} />
        <PStyled>{props.name}</PStyled>
      </Link>
    </DivStyled>
  )
}

CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string
}

const ImgStyled = styled.img`
  width: 100px;
  margin: auto;
`
const DivStyled = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  margin: 10px auto;
  display: flex;
  width: 30%;
  flex-wrap: wrap;
  height: 200px;
`

const PStyled = styled.p`
  margin: auto;
`

export default CharacterCard
