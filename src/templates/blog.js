import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'
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
      }
      body
    }
  }
`

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.mdx.frontmatter.title}</h1>
            <h1>{props.data.mdx.frontmatter.date}</h1>
            <MDXRenderer>
              {props.data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

export default Blog;