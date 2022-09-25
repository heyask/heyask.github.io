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
      width: 720px;
      margin: 64px auto;
      padding: 32px;
      border: 1px solid ${theme.colors.default[1]};
    `}>
      <StaticImage
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../assets/images/profile-pic.jpg"
        width={100}
        height={100}
        quality={95}
        alt="Profile picture"
        css={css`
          border-radius: 50%;
          margin-right: 16px;
        `}
      />
      {author?.name && (
        <div>
          <p>
            <Link to={`/about`}><strong>{author.name}</strong></Link>
          </p>
          <p>{author?.summary || null}</p>
          <a href={`https://github.com/${social?.github || ``}`}>
            GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default Bio;
