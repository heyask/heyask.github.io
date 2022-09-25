import * as React from "react";
import { Global, ThemeProvider, useTheme } from "@emotion/react";
import { css } from "@emotion/react";
import Header from "./header";
import BaseLayout from "./base-layout";
import { GlobalStyle } from "../styles/global";
import Footer from "./footer";
import Test from "./test";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  const theme = useTheme();

  return (
    <>
      <div css={css`
        background: ${theme.colors.default[0]};
        min-height: 100vh;
      `} data-is-root-path={isRootPath}>
        <main css={css`
          max-width: ${theme.breakpoints[3]}px;
          margin: 60px auto;
        `}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
