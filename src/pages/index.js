import React from 'react'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'

const Index = ({ data }) => {
  const posts = data.allContentfulPost.edges

  return (
    <div>
      <SEO />
      <Container>
        <PageTitle small>
          new axion.zone α
          <span>🎉</span>
          Former site is
           <a
            href="https://axion.blog/"
            target="_blank"
            rel="noopener noreferrer"
           >
         here
          </a>
        </PageTitle>
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
