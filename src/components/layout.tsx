import * as React from "react";
import { Global, ThemeProvider, useTheme } from "@emotion/react";
import Header from "./header";
import BaseLayout from "./base-layout";
import { GlobalStyle } from "../styles/global";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  const theme = useTheme();

  return (
    <BaseLayout>
      <Global styles={GlobalStyle(theme)} />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <Header location={location} title={title} />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </BaseLayout>
  );
};

export default Layout;
