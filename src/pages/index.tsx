import * as React from "react";
import { graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Link from "../components/link";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;
  const theme = useTheme();

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          포스트가 없습니다.
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <ol css={css`
        list-style: none;
        margin: 0;
        padding: 30px 24px;
      `}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug;

          return (
            <li key={post.fields.slug}>
              <article
                itemScope
                itemType="https://schema.org/Article"
              >
                <header>
                  <small css={css`
                    color: ${theme.colors.default[10]};
                  `}>{post.frontmatter.date}</small>
                  <h2 css={css`
                    margin: 0;
                    margin-top: 6px;
                    margin-bottom: 8px;
                    font-size: 16pt;
                    transition: transform 100ms;
                    &:hover {
                      transform: translateX(3px);
                    }
                  `}>
                    <Link to={post.fields.slug}>
                      {title}
                    </Link>
                  </h2>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt
                    }}
                    itemProp="description"
                    css={css`
                      margin: 0;
                      margin-bottom: 24px;
                      color: ${theme.colors.default[10]}
                    `}
                  />
                </section>
              </article>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" lang={undefined} children={undefined} />;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                excerpt
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "YYYY-MM-DD")
                    title
                    description
                }
            }
        }
    }
`;