import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { css as emotionCSS } from "@emotion/react";
import { useTheme } from "@emotion/react";

const Link = ({ to, style, children }: any) => {
  const theme = useTheme();
  return (
    <GatsbyLink to={to} css={emotionCSS`
      display: inline-block;
      color: ${theme.colors.default[25]};
      &:visited {
        color: ${theme.colors.default[25]};
      }
      &:hover {
        color: ${theme.colors.default[16]};
      }
      &:active {
        color: ${theme.colors.default[10]};
      }
      ${style};
    `}>
      {children}
    </GatsbyLink>
  );
};

export default Link;
