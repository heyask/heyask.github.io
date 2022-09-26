import { css, Theme } from "@emotion/react";

export const GlobalStyle = (theme: Theme) => (css`
:root {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
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