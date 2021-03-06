import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont,"Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  font-size: ${props => (props.small ? '1.5em' : '2em')};
  text-transform: capitalize;
  font-weight: 600;
  text-align: center;
  margin: 0 0 1rem 1rem;
  margin: ${props => (props.small ? '1rem 0 1rem 0' : '0 0 1rem 0')};
  line-height: 1.2;
  span {
    margin: 0 0 0 0.25em;
  }
  a {
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const PageTitle = props => {
  return <Title small={props.small}>{props.children}</Title>
}

export default PageTitle
