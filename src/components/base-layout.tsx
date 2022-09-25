import * as React from "react";
import { ThemeProvider } from "@emotion/react";
import { useRecoilState } from "recoil";
import { dark, light, themeState } from "../styles/theme";
import { useEffect } from "react";

const BaseLayout = ({ children }) => {
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    setTheme(localStorage.getItem("theme") ?? light.key);
  }, []);

  return (
    <ThemeProvider theme={theme == dark.key ? dark : light}>
      {children}
    </ThemeProvider>
  );
};

export default BaseLayout;
