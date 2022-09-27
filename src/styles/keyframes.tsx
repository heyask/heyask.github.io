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
      50% { transform: translateX(12px); }
      100% { transform: translateX(0); }
`;
export const jump = keyframes`
        0% { transform: translateY(0); }
      10% { transform: translateY(-2px); }
      20% { transform: translateY(0); }
      100% { transform: translateY(0); }
`;