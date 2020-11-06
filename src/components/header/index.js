import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => (
  <NavStyled>
    <ul>
      {/* <Link to='/characters'>
        <li>Home</li>
      </Link> */}
      <Link to='/'>
        <li>Login</li>
      </Link>
      {/* <Link to='/favoris'>
        <li>Favoris</li>
      </Link> */}
    </ul>
  </NavStyled>
)

const NavStyled = styled.div`
  position: absolute;
`

export default Header
