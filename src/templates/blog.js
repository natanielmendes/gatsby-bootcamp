import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout';

export const query = graphql`
  query (
    $slug: String!
  ) {
    mdx (
      slug: {
        eq: $slug
      }
    ) {
      frontmatter {
        title
        date
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
						gatsbyImageData
          }
        }
      }
      body
    }
  }
`

const Blog = (props) => {
  const image = getImage(props.data.mdx.frontmatter.hero_image)

  return (
      <Layout>
          <h1>{props.data.mdx.frontmatter.title}</h1>
          <h1>{props.data.mdx.frontmatter.date}</h1>
          <GatsbyImage
            image={image}
            alt={props.data.mdx.frontmatter.hero_image_alt}
          />
          <p>
            Image Credit:{" "}
            <a href={props.data.mdx.frontmatter.hero_image_credit_link}>
              {props.data.mdx.frontmatter.hero_image_credit_text}
            </a>
          </p>
          <MDXRenderer>
            {props.data.mdx.body}
          </MDXRenderer>
      </Layout>
  )
}

export default Blog;