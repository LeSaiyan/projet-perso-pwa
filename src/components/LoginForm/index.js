import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../Input'
import Button from '../Button'
import { connect } from '../../services'
import PropTypes from 'prop-types'

const LoginForm = props => {
  //   console.log(props.props)
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const connectLogin = () => {
    console.log(form)
    if (form.username !== '' && form.password !== '') {
      connect(form).then(res => {
        localStorage.setItem('token', res.headers['x-access-token'])
        props.props.history.push('/home')
      })
    } else {
      alert("Le formulaire n'est pas complet")
    }
  }

  const onChangeForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  return (
    <DivStyled>
      <Input
        label='Login'
        type='text'
        change={e => onChangeForm(e)}
        nameInput='username'
      />
      <Input
        label='Password'
        type='password'
        change={e => onChangeForm(e)}
        nameInput='password'
      />
      <Button text='Valider' submit={connectLogin} />
    </DivStyled>
  )
}

const DivStyled = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 1px 1px purple;
  margin: auto;
  padding: 10px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`
LoginForm.propTypes = {
  LoginForm: PropTypes.string,
  history: PropTypes.string,
  props: PropTypes.string
}

export default LoginForm
