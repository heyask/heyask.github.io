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
export const wriggle = keyframes`
        0% { transform: rotate(0deg); }
      25% { transform: rotate(10deg); }
      50% { transform: rotate(-10deg); }
      75% { transform: rotate(10deg); }
      100% { transform: translateX(0deg); }
`;
export const jump = keyframes`
        0% { transform: translateY(0); }
      10% { transform: translateY(-2px); }
      20% { transform: translateY(0); }
      100% { transform: translateY(0); }
`;
export const moveTop = keyframes`
        // 0% { transform: translateX(30px); }
      100% { transform: translateY(0); }
  `;
export const moveLeft = keyframes`
        // 0% { transform: translateX(30px); }
      100% { transform: translateX(0); }
  `;