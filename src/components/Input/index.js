import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Input = props => {
  return (
    <DivStyled>
      <InputStyled
        type={props.type}
        onChange={props.change}
        name={props.nameInput}
        placeholder={props.label}
      />
    </DivStyled>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  change: PropTypes.func,
  nameInput: PropTypes.string
}

const InputStyled = styled.input`
  width: 200px;
  margin: 5%;
`
const DivStyled = styled.div``

export default Input
