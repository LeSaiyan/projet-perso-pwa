import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => (
  <NavStyled>
    <UlStyled>
      <Link to='/home'>
        <li>Home</li>
      </Link>
      <Link to='/episodes'>
        <li>Episodes</li>
      </Link>
      <Link to='/characters'>
        <li>Characters</li>
      </Link>
      <Link to='/favoris'>
        <li>Favoris</li>
      </Link>
    </UlStyled>
  </NavStyled>
)

const NavStyled = styled.div`
  width: 100%;
`
const UlStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0;
  list-style: none;
`
export default Header
