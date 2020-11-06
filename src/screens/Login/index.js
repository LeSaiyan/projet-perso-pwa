import React, { useEffect } from 'react'
import styled from 'styled-components'
import background from '../../assets/img/Ateyaba1-1440x1183resize.jpg'
import LoginForm from '../../components/LoginForm'
import PropTypes from 'prop-types'

const Login = props => {
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      props.history.push('/home')
    }
  }, [])
  return (
    <DivStyled>
      <LoginForm props={props} />
    </DivStyled>
  )
}

const DivStyled = styled.div`
  width: 100%;
  height 100vh;
  background : url(${background});
  background-size : cover;
`
Login.propTypes = {
  LoginForm: PropTypes.string,
  history: PropTypes.string
}

export default Login
