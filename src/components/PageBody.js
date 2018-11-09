import React from 'react'
import styled from 'styled-components'
require('prismjs/themes/prism.css')

const Body = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};

  h1,
  h2,
  h3 {
    font-family: -apple-system, BlinkMacSystemFont,"Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    font-weight: 600;
    line-height: 1.75;
    margin: 0 0 1rem 0;
    text-transform: capitalize;
  }

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1.125em;
  }

  p {
    font-family: -apple-system, BlinkMacSystemFont,"Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    color: #333
    font-size: 1em;
    letter-spacing: 1.5px;
    line-height: 1.75;
    margin: 0 0 2em 0;
  }

  a {
    transition: 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 2em 0;
  }

  ul {
    li {
      list-style: disc;
      list-style-position: inside;
      line-height: 1.75;
      color: #333
      font-size: 1em;
      &:last-child {
        margin: 0 0 2em 0;
      }
    }
  }

  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.75;
      color: #333
      font-size: 1em;
      &:last-child {
        margin: 0 0 2em 0;
      }
    }
  }

  hr {
    border-style: solid;
    border-color: ${props => props.theme.colors.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 0px;
    padding-left: 15px;
    border-left: 4px solid ${props => props.theme.colors.secondary};
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
    background: ${props => props.theme.colors.secondary} !important;
    span {
      background: inherit !important;
    }
  }
`

const PageBody = props => {
  return (
    <Body
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default PageBody
