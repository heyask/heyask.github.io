import * as React from "react";
import { graphql } from "gatsby";
import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Comment from "../components/comment";
import { css, useTheme } from "@emotion/react";
import Link from "../components/link";
import "prismjs/themes/prism-okaidia.min.css";

const BlogPostTemplate = ({ data: { previous, next, site, markdownRemark: post }, location }) => {
  const siteTitle = site.siteMetadata?.title || `Title`;
  const theme = useTheme();

  return (
    <Layout location={location} title={siteTitle}>
      <article
        css={css`
          max-width: 800px; margin: 0 auto;
        `}
        itemScope
        itemType="https://schema.org/Article"
      >
        <header>
          <h1 css={css`
            max-width: 800px;
            margin: 0 auto;
            padding: 120px 24px 30px 24px;
            text-align: center;
            font-size: 36px;
            font-weight: 900;
            color: ${theme.colors.default[25]};
            ${theme.mq[0]} {
              font-size: 32px;
              padding: 50px 24px;
              marign-bottom: 0;
            }
          `}>
            {post.frontmatter.title}
          </h1>
          <p css={css`
           margin-bottom: 100px;
           text-align: center;
           color: ${theme.colors.default[10]};
           ${theme.mq[0]} {
              margin-top: 0;
              margin-bottom: 50px;
            }
          `}>{post.frontmatter.category} | {post.frontmatter.date}</p>
        </header>
        <div css={css`
              max-width: 800px;
              margin: 0 auto;
              padding: 0 24px; 
            `}>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
            css={css`
              word-break: break-all;
              h1, h2, h3, h4, h5, h6 {
                font-weight: 900;
                color: ${theme.colors.default[20]};
              }
              h1 {
                font-size: 30px;
                line-height: 42px;
                margin-top: 36px;
                margin-bottom: 0px;
              }
              h2 {
                font-size: 26px;
                line-height: 36px;
                margin-top: 32px;
                margin-bottom: 0px;
              }
              h3 {
                font-size: 22px;
                line-height: 32px;
                margin-top: 26px;
                margin-bottom: 0px;
              }
              h4 {
                font-size: 20px;
                line-height: 30px;
                margin-top: 20px;
                margin-bottom: 0px;
              }
              h5 {
                font-size: 18px;
                line-height: 28px;
              }
              h6 {
                font-size: 16px;
                line-height: 26px;
              }
              img + em, span + em {
                display: block;
                width:100%;
                text-align: center;
                font-size: 14px;
                color: ${theme.colors.default[10]};
              }
              p {
                color: ${theme.colors.default[20]};
                font-size: 16px;
                line-height: 28px;
                margin-bottom: 16px;
                padding: 0;
              }
              a {
                color: ${theme.colors.primary};
                margin: 0;
                padding: 0;
                vertical-align: baseline;
                &:visited {
                  color: ${theme.colors.primary};
                }
                &:hover {
                  color: ${theme.colors.primary};
                }
                &:active {
                  color: ${theme.colors.primary};
                }
              }
              ul, ol {
                li {
                  color: ${theme.colors.default[20]};
                  font-size: 16px;
                  line-height: 28px;
                  margin-bottom: 12px;
                }
              }
              code {
                background-color: ${theme.colors.default[2]} !important;
                color: ${theme.colors.default[25]} !important;
                text-shadow: none !important;
                font-size: 13px !important;
                padding: 4px 6px !important;
              }
              pre {
                white-space: pre-wrap;
                code {
                  background: inherit !important;
                  color: inherit !important;
                  text-shadow: inherit !important;
                }
              }
              aside {
                  display: block;
                  float: right;
              }
              blockquote {
                  margin: 24px 0;
                  padding: 24px 32px;
                  box-sizing: border-box;
                  border-left: 5px solid ${theme.colors.primary};
                  background: ${theme.colors.default[1]};
                  p {
                    color: ${theme.colors.default[16]};
                    &:last-child {
                      margin: 0;
                    }
                  }
              }
              hr {
                height: 1px;
                margin: 30px 0;
                border: none;
                background-color: ${theme.colors.default[1]};
              }
              table {
                  border-collapse: collapse;
                  margin: 1em 1em;
                  border: 1px solid #CCC;
              }
              table thead {
                  background-color: #EEE;
              }
              table thead td {
                  color: #666;
              }
              table td {
                  padding: 0.5em 1em;
                  border: 1px solid #CCC;
              }
            `}
          />
        </div>
        <footer>
          <div css={css`
            display: flex;
            max-width: 800px;
            flex-direction: column;
            margin: 50px 24px 24px 24px;
            align-items: stretch;
            justify-content: center;
          `}>
            <Bio />
          </div>
          <nav css={css`max-width: 800px; margin-bottom: 24px;`}>
            <ul
              css={css`
                display: flex;
                list-style: none;
                padding: 0 24px;
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
                    <Link to={previous.fields.slug} style={css`
                      flex-grow: 1;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      border: 1px solid ${theme.colors.default[1]};
                      padding: 12px;
                      border-radius: 8px;
                      &:hover {
                        background: ${theme.colors.default[1]};
                      }
                    `}>
                      <span>← </span>
                      <span css={css`
                        flex-grow:1;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      `}>{previous.frontmatter.title}</span>
                      {previous.frontmatter.title}
                    </Link>
                  </>
                )}
              </li>
              <li css={css`min-width: 16px;`} />
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
                    <Link to={next.fields.slug} style={css`
                      flex-grow: 1;
                      display: flex;
                      overflow: hidden;
                      border: 1px solid ${theme.colors.default[1]};
                      padding: 12px;
                      border-radius: 8px;
                      &:hover {
                        background: ${theme.colors.default[1]};
                      }
                    `}>
                      <span css={css`
                        flex-grow:1;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      `}>{next.frontmatter.title}</span>
                      <span> →</span>
                    </Link>
                  </>
                )}
              </li>
            </ul>
          </nav>
          <div>
            <Comment location={location} />
          </div>
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
                category
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
