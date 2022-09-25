import * as React from "react";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { useRecoilState } from "recoil";
import { light, dark, themeState } from "../styles/theme";
import Link from "./link";
import lottie, { AnimationItem } from "lottie-web";
import { useEffect, useMemo, useRef } from "react";

const Footer = () => {
  const theme = useTheme();

  return (
    <footer css={css`
        border-top: 1px solid ${theme.colors.default[1]};
        padding: 50px 0px;
        text-align: center;
        background: ${theme.colors.default[0]};
        color: ${theme.colors.default[10]}
        `}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <Link to="https://www.gatsbyjs.com">Gatsby</Link>
    </footer>
  );
};

export default Footer;
