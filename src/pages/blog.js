import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
      query {
        allMdx {
          edges {
            node {
              frontmatter {
                title
                date
              }
              slug
            }
          }
        }
      }
    `);
    
    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
              {data.allMdx.edges.map((edge) => {
                return (
                  <li>
                    <Link to={`/blog/${edge.node.slug}`}>
                      <h2>{edge.node.frontmatter.title}</h2>
                      <p>{edge.node.frontmatter.date}</p>
                    </Link>
                  </li>
                )
              })}
            </ol>
        </Layout>
    )
}

export default BlogPage;