import * as React from "react";
import { useTheme } from "@emotion/react";
import { css } from "@emotion/react";
import Footer from "./footer";
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
