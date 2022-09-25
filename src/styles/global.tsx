import { css, Theme } from "@emotion/react";

export const GlobalStyle = () => (css`
:root {
  font-family: "Nanum Gothic";
}
a {
  text-decoration: none;
}
* {
  transition: background 300ms, border 300ms, color 100ms;
}
`);