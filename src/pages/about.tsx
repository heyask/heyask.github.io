import * as React from "react";
import {  graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { css, useTheme } from "@emotion/react";

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const theme = useTheme();

  return (
    <Layout location={location} title={siteTitle}>
      <div css={css`
        max-width:${theme.breakpoints[3]}px;
        margin: 0 auto;
        padding-top: 30px;      
      `}>
          <h1 css={css`
            font-size: 48px;
            font-weight: 800;
            color: ${theme.colors.primary};
          `}>안녕하세요</h1>
          <h1 css={css`
            font-size: 48px;
            font-weight: 800;
            color: ${theme.colors.primary};
          `}>개발자 김승현입니다.</h1>
      </div>
    </Layout>
  );
};

export default AboutPage;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" children={undefined} lang={undefined} />;

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
                    date(formatString: "MMMM DD, YYYY")
                    title
                    description
                }
            }
        }
    }
`;
