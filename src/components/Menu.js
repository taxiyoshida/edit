import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Header = styled.header`
  background: linear-gradient(#e66465, #9198e5);
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    font-family: -apple-system, BlinkMacSystemFont,"Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: white;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" exact activeStyle={activeLinkStyle}>
              Home
            </Link>
          </li>
          <img src="/static/logos/logo_header.png" alt="axion" height="42" width="42"></img>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
    
  )
}

export default Menu
