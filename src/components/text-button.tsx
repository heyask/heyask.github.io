import * as React from "react";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import Link from "./link";

const TextButton = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <a
      css={css`
        display: flex; 
        align-items: center; 
        font-size: 14px;
        color: ${theme.colors.default[16]};
        padding: 4px 12px;
        border-radius: 16px;
        &:hover {
          background: ${theme.colors.default[2]};
        }
      `}
      {...props}>
      {children}
    </a>
  );
};

export default TextButton;
