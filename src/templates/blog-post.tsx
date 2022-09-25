import * as React from "react";
import { graphql } from "gatsby";
import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Comment from "../components/comment";
import { css, useTheme } from "@emotion/react";
import Link from "../components/link";

const BlogPostTemplate = ({ data: { previous, next, site, markdownRemark: post }, location }) => {
  const siteTitle = site.siteMetadata?.title || `Title`;
  const theme = useTheme();

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className={`blog-post ` + css`max-width: 760px; margin: 0 auto;`}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 css={css`
            max-width: 720px;
            margin: 0 auto;
            padding: 120px 0 24px 0;
            text-align: center;
            font-size: 30pt;
          `}>
            {post.frontmatter.title}
          </h1>
          <p css={css`
           padding:0 0 60px 0;
           text-align: center;
           color: ${theme.colors.default[10]}
          `}>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          css={css`
            max-width: 720px;
            margin: 0 auto;
            padding: 0 24px; 
          `}
        />
        <footer>
          <Bio />
          <nav className="blog-post-nav">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
          <Comment location={location} />
        </footer>
      </article>
    </Layout>
  );
};

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt} children={undefined} lang={undefined} />
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug(
        $id: String!
        $previousPostId: String
        $nextPostId: String
    ) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(id: { eq: $id }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "YYYY년 MM월 DD일")
                description
            }
        }
        previous: markdownRemark(id: { eq: $previousPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
        next: markdownRemark(id: { eq: $nextPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
    }
`;
