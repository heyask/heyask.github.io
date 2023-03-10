import * as React from "react";
import { graphql } from "gatsby";
import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Link from "../components/link";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { getRandomCatImage } from "../components/utils";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { useMemo, useState } from "react";
import { wriggle, wriggleRight } from "../styles/keyframes";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;
  const categories = useMemo<string[]>(() => [...new Set(posts.map((post) => post.frontmatter.category) as string[])], []);
  const [selectedCategory, selectSelectedCategory] = useState(null);
  const theme = useTheme();
  const catImage = useMemo<string>(() => getRandomCatImage(), []);

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
      <div css={css`
        list-style: none;
        // max-width: ${theme.breakpoints[3]}px;
        max-width: 800px;
        margin: 0 auto;
        padding: 30px 24px;
        ${theme.mq[0]} {
          padding: 24px 24px;
        }
      `}>
        <div css={css`
            width: fit-content;
            display: block;
            text-align: center;
            border: 4px solid ${theme.colors.default[16]};
            padding: 30px 60px;
            margin: 30px auto 50px auto;
          `}>
          <p css={css`
            animation: ${wriggle} 2s infinite; 
          `}>✍️</p>
          <h2 css={css`color: ${theme.colors.default[25]};`}>
            개발자 김승현
          </h2>
          <p css={css`font-weight: 200; color: ${theme.colors.default[16]};`}>그릿을 해빗으로</p>
        </div>
        <div css={css`
            margin-bottom: 16px;
            overflow-x: scroll;
            &::-webkit-scrollbar {
              display: none;
            }
          `}>
          <div css={css`
            display: flex;
            white-space: nowrap;
            animation: ${wriggleRight} 2s;
          `}>
            {[null, ...categories].map((category) =>
              <span key={category} onClick={e => selectSelectedCategory(category)}
                    css={css`
                      background: ${category == selectedCategory ? theme.colors.primary : theme.colors.default[1]}; 
                      color: ${category == selectedCategory ? "white" : theme.colors.default[20]}; 
                      padding: 8px 16px; 
                      margin-right: 12px; 
                      border-radius: 50px; 
                      cursor: pointer;
                      font-size: 14px;
                      ${theme.mq[0]} {
                        margin-right: 6px;
                      }
                    `}
              >{category ?? "전체"}</span>)}
          </div>
        </div>
        <ol css={css`
          list-style: none;
          margin: 0;
          padding: 0;
        `}>
          {posts.map(post => {
            if (selectedCategory != null && selectedCategory != post.frontmatter.category) return;
            const title = post.frontmatter.title || post.fields.slug;
            const image = getImage(post.frontmatter.thumbnail);

            return (
              <Link key={post.fields.slug}
                    to={post.fields.slug}
                    style={css`
                display:block;
                &:hover {
                  h2 {
                    transform: translateX(3px);
                  }
                }
              `}>
                <li>
                  <article
                    itemScope
                    itemType="https://schema.org/Article"
                    css={css`
                      display: flex;
                      margin-bottom: 36px;
                      border: 1px solid ${theme.colors.default[1]};
                      ${theme.mq[0]} {
                        flex-direction: column-reverse;
                        padding: 0;
                      }
                  `}>
                    <div css={css`
                      flex-grow: 1;
                      padding: 24px 0 24px 24px;
                      ${theme.mq[0]} {
                        padding: 12px 24px;
                      }
                    `}>
                      <header>
                        <div css={css`color: ${theme.colors.default[10]};`}>
                          <small>{post.frontmatter.category} | {post.frontmatter.date}</small>
                        </div>
                        <h2 css={css`
                          margin: 6px 0 8px 0;
                          font-size: 16pt;
                          color: ${theme.colors.default[25]};
                          ${theme.mq[0]} {
                            font-weight: 800;
                            font-size: 18px;
                          }
                        `}>
                          {title}
                        </h2>
                      </header>
                      <section>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: post.frontmatter.description || post.excerpt
                          }}
                          itemProp="description"
                          css={css`
                            display: box;
                            font-size: 14px;
                            line-height: 20px;
                            margin: 0;
                            color: ${theme.colors.default[10]};
                            word-break: break-all;
                          `} />
                      </section>
                    </div>
                    <div css={css`
                      margin: 24px;
                      ${theme.mq[0]} {
                        font-weight: 800;
                        margin: 0;
                      }
                    `}>
                      {image ?
                        <GatsbyImage
                          image={image}
                          alt={post.thumbnail?.name ?? "thumbnail"}
                          css={css`
                            min-width: 150px;
                            max-width: 150px;
                            min-height: 150px;
                            max-height: 150px;
                            object-fit: cover;
                            align-self: center;
                            ${theme.mq[0]} {
                              min-width: 100%;
                              max-width: 100%;
                              min-height: 150px;
                              max-height: 150px;
                            }
                          `}
                        />
                        :
                        <img
                          src={catImage}
                          width={150}
                          height={150}
                          alt="thumbnail"
                          css={css`
                            min-width: 150px;
                            max-width: 150px;
                            min-height: 150px;
                            max-height: 150px;
                            object-fit: cover;
                            ${!post.frontmatter.thumbnail?.publicURL && "filter: grayscale(100%) contrast(50%);"}
                            align-self: center;
                            ${theme.mq[0]} {
                              min-width: 100%;
                              max-width: 100%;
                              min-height: 150px;
                              max-height: 150px;
                            }
                          `}
                        />}
                    </div>
                  </article>
                </li>
              </Link>
            );
          })}
        </ol>
      </div>
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
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { 
                frontmatter: {
                    category: { nin: [null, "codekata", "TIL"] },
                    published: { eq: true } 
                } 
            }
        ) {
            nodes {
                excerpt
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "YYYY-MM-DD")
                    title
                    description
                    category
                    thumbnail {
                        name
                        childImageSharp {
                            gatsbyImageData(
                                width: 600
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
            }
        }
    }
`;
