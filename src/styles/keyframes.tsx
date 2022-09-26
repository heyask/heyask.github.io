import { keyframes } from "@emotion/react";

export const fadeIn = keyframes`
        0% { opacity: 0; }
      100% { opacity: 1; }
`;
export const scaleUp = keyframes`
        0% { transform: scale(0); }
      100% { transform: scale(1); }
`;
export const wriggleRight = keyframes`
        0% { transform: translateX(0); }
      50% { transform: translateX(-12px); }
      100% { transform: translateX(0); }
`;