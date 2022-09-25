import * as React from "react";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import Link from "./link";

const Button = ({ className, to, children, onClick }: any) => {
  const theme = useTheme();
  return (
    <span css={css`
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 50px;
      min-height: 50px;
      margin: 5px;
      border-width: 0;
      border-radius: 50%;
      cursor: pointer;
      background-color: transparent;
      overflow: hidden;
      &:hover {
        background: ${theme.colors.default[1]}
      }
      
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        width: 100%;
        height: 100%;
      }
      
      a {
        display: flex;
        align-items: center;
        justify-content: center;
      min-width: 50px;
      min-height: 50px;
        width: 100%;
        height: 100%;
      }
    `} onClick={onClick}>
      {to ? <Link to={to}>{children}</Link> : <span>{children}</span>}
    </span>
  );
};

export default Button;
