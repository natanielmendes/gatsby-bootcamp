import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
      query {
        allMdx {
          nodes {
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
            slug
          }
        }
      }
    `);
    
    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
              {data.allMdx.nodes.map((node) => {
                return (
                  <article key={node.id}>
                    <Link to={`/blog/${node.slug}`} key={node.id}>
                      <h2>{node.frontmatter.title}</h2>
                      <p>Posted: {node.frontmatter.date}</p>
                    </Link>
                  </article>
                )
              })}
            </ol>
        </Layout>
    )
}

export default BlogPage;