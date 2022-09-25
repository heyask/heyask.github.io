/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { css, useTheme } from "@emotion/react";
import Link from "./link";

const Bio = () => {
  const data = useStaticQuery(graphql`
      query BioQuery {
          site {
              siteMetadata {
                  author {
                      name
                      summary
                  }
                  social {
                      twitter
                      github
                  }
              }
          }
      }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.ts
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;
  const theme = useTheme();

  return (
    <div css={css`
      display: flex;
      margin: 64px 24px 48px 24px;
      padding: 32px;
      border: 1px solid ${theme.colors.default[1]};
    `}>
      <StaticImage
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../assets/images/profile-pic.jpg"
        width={80}
        height={80}
        quality={95}
        alt="Profile picture"
        css={css`
          border-radius: 50%;
          margin-right: 16px;
        `}
      />
      {author?.name && (
        <div>
          <p css={css`margin-top: 4px; margin-bottom: 0px;`}>
            <Link to={`/about`}><strong>{author.name}</strong></Link>
          </p>
          <p css={css`color: ${theme.colors.default[10]}; margin-top: 10px; margin-bottom: 6px;`}>{author?.summary || null}</p>
          <Link to={`https://github.com/${social?.github || ``}`}>
            <small>GitHub</small>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Bio;
