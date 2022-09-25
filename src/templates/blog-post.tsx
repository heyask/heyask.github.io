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
        itemType="https://schema.org/Article"
      >
        <header>
          <h1 css={css`
            max-width: 800px;
            margin: 0 auto;
            padding: 120px 24px 30px 24px;
            text-align: center;
            font-size: 30pt;
          `}>
            {post.frontmatter.title}
          </h1>
          <p css={css`
           margin-bottom: 100px;
           text-align: center;
           color: ${theme.colors.default[10]}
          `}>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          css={css`
            max-width: 800px;
            margin: 0 auto;
            padding: 0 24px; 
          `}
        />
        <footer>
          <div css={css`
            display: flex;
            margin: 64px 24px 48px 24px;
            max-width: 800px;
            flex-direction: column;
            margin: 0 auto;
            align-items: stretch;
            justify-content: center;
          `}>
            <Bio />
          </div>
          <nav css={css`max-width: 800px; margin: 30px auto 50px;`}>
            <ul
              css={css`
                display: flex;
                list-style: none;
                padding: 0;
              `}
            >
              <li css={css`
                display: flex;
                align-items: center;
                justify-content: start;
                white-space: nowrap;
                flex-grow: 1;
                flex-basis: 0;
                overflow: hidden;
                text-overflow: ellipsis;
              `}>
                {previous && (
                  <>
                    <span>← </span>
                    <Link to={previous.fields.slug} style={css`
                      overflow: hidden;
                      text-overflow: ellipsis;
                    `}>
                      {previous.frontmatter.title}
                    </Link>
                    <span css={css`min-width: 10px;`}/>
                  </>
                )}
              </li>
              <li css={css`
                display: flex;
                align-items: center;
                justify-content: end;
                white-space: nowrap;
                flex-grow: 1;
                flex-basis: 0;
                overflow: hidden;
                text-overflow: ellipsis;
              `}>
                {next && (
                  <>
                    <span css={css`min-width: 10px;`}/>
                    <Link to={next.fields.slug} style={css`
                      overflow: hidden;
                      text-overflow: ellipsis;
                    `}>
                      {next.frontmatter.title}
                    </Link>
                    <span> →</span>
                  </>
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
