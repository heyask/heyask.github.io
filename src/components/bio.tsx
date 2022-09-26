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
import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";

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
      padding: 24px;
      border: 1px solid ${theme.colors.default[1]};
      align-items: center;
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
          margin-right: 24px;
        `}
      />
      {author?.name && (
        <div>
          <p css={css`margin: 0;`}>
            <small css={css`color: ${theme.colors.default[10]};`}>Written by </small><Link to={`/about`} style={css`
              background: ${theme.colors.default[1]};
              padding: 6px 16px 4px;
              border-radius: 12px;
              color: ${theme.colors.primary} !important;
              &:hover {
                background: ${theme.colors.default[2]};
              }
            `}><strong>{author.name}</strong></Link>
          </p>
          <p css={css`color: ${theme.colors.default[16]}; margin-top: 8px; margin-bottom: 10px;`}>{author?.summary || null}</p>
          <Link to={`https://github.com/${social?.github || ``}`}>
            <span css={css`
              display: flex; 
              align-items: center; 
              font-size: 14px;
              background: ${theme.colors.default[1]};
              color: ${theme.colors.default[16]};
              padding: 4px 12px;
              border-radius: 12px;
              &:hover {
                background: ${theme.colors.default[2]};
              }
            `}><Icon path={mdiGithub} size={0.8} color={theme.colors.default[16]} css={css`margin-right: 4px;`} /> GitHub</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Bio;
