import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = props => {
  return <ButtonStyled onClick={props.submit}>{props.text}</ButtonStyled>
}

const ButtonStyled = styled.button``
Button.propTypes = {
  submit: PropTypes.func,
  text: PropTypes.string
}

export default Button
