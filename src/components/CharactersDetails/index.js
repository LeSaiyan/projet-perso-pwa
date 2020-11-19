import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CharactersDetails = props => {
  return (
    <DivStyled>
      <TitleStyled>{props.name}</TitleStyled>
      <ImgStyled src={props.image_url} />
      <AboutStyled>{props.about}</AboutStyled>
    </DivStyled>
  )
}

CharactersDetails.propTypes = {
  about: PropTypes.string,
  name: PropTypes.string,
  image_url: PropTypes.string
}

const DivStyled = styled.div``

const ImgStyled = styled.img`
  width: 100%;
`

const TitleStyled = styled.h4``

const AboutStyled = styled.p``

export default CharactersDetails
