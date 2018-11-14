import React from 'react'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import styled from 'styled-components'

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
`


const Index = ({ data }) => {
  const posts = data.allContentfulPost.edges

  return (
    <div>
      <SEO />
      <Container>
        <PageTitle small>
          Finding Founding<a href="https://axion.zone/looking-for-founding-member/"> Members</a>
           / 創業メンバー<a href="https://axion.zone/founding-members-japanese/">募集中</a>
        </PageTitle>
        <Button
          href="https://twitter.com/taxiyoshida?ref_src=twsrc%5Etfw"
          target="_blank"
          rel="noopener"
          primary
        >
          Twitter
        </Button>
        
        <Button
          href="https://www.facebook.com/taxi.yoshida"
          target="_blank"
          rel="noopener"
          primary
        >
      　　Facebook
        </Button>
        
        <Button
          href="https://taxiyoshida.net/"
          target="_blank"
          rel="noopener"
          primary
        >
      　　Website
        </Button>

        <CardList>
          {posts.map(({ node: post }) => (
            <Card
              key={post.id}
              slug={post.slug}
              image={post.heroImage}
              title={post.title}
              date={post.publishDate}
              excerpt={post.body}
            />
          ))}
        </CardList>
      </Container>
    </div>
  )
}

export const query = graphql`
  query indexQuery {
    allContentfulPost(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
  }
`

export default Index
