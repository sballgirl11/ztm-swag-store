import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import ItemThumbnail from '../components/ItemThumbnail/ItemThumbnail';
import Layout from "../components/layout"
import SEO from "../components/seo"

const ThumbnailsWrapper = styled.div`
    width: 50%;
    left: 25%;
    position: relative;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
    justify-content: center;
    grid-gap: 1.5em;
    margin-bottom: 1.5em; 
`

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const items = data.allMarkdownRemark.edges

    return (
      <Layout title={siteTitle}>
        <SEO title="Products" />
        <ThumbnailsWrapper>
          {items.map(({ node }) => {
            const { title, image, price, id, description } = node.frontmatter
            return (
              <ItemThumbnail
                key={node.fields.slug}
                link={node.fields.slug}
                heading={title}
                image={image.childImageSharp.fluid}
                price={price}
                id={id}
                description={description}
              />
            )
          })}
        </ThumbnailsWrapper>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            price
            id
            description
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
