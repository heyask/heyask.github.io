import * as React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { useRecoilState } from "recoil";
import { dark, light, themeState } from "../styles/theme";
import { useEffect } from "react";
import { GlobalStyle } from "../styles/global";
import Header from "./header";

const BaseLayout = ({ children, ...props }) => {
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    setTheme(localStorage.getItem("theme") ?? light.key);
  }, []);

  return (
    <ThemeProvider theme={theme == dark.key ? dark : light}>
      <Global styles={GlobalStyle()} />
      <Header {...props} />
      {children}
    </ThemeProvider>
  );
};

export default BaseLayout;
