import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CharactersDetails = props => {
  console.log(props)
  return (
    <DivStyled>
      <TitleStyled>{props.details.name}</TitleStyled>
      <ImgStyled src={props.details.image_url} />
      <AboutStyled>{props.details.about}</AboutStyled>
    </DivStyled>
  )
}

CharactersDetails.propTypes = {
  details: PropTypes.object,
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
