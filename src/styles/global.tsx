import { css, Theme } from "@emotion/react";

export const GlobalStyle = (theme: Theme) => (css`
:root {
  font-family: "Nanum Gothic";
}
body {
  background: ${theme.colors.default[0]};
}
a {
  text-decoration: none;
}
* {
  transition: background 300ms, border 300ms, color 100ms;
}
`);