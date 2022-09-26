import * as React from "react";
import { Global, ThemeProvider, useTheme } from "@emotion/react";
import { css } from "@emotion/react";
import Header from "./header";
import BaseLayout from "./base-layout";
import { GlobalStyle } from "../styles/global";
import Footer from "./footer";
import Test from "./test";
import { fadeIn } from "../styles/keyframes";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  const theme = useTheme();

  return (
    <>
      <div css={css`
      `} data-is-root-path={isRootPath}>
        <main css={css`
          max-width: ${theme.breakpoints[3]}px;
          min-height: 80vh;
          margin: 60px auto;
          animation: ${fadeIn} 600ms;
        `}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
