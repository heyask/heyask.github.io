import React, { createRef, useEffect, useRef, useState } from "react";
import { css, useTheme } from "@emotion/react";
import { fadeIn } from "../styles/keyframes";

export default function Comment({ location }) {
  const containerRef = useRef<HTMLDivElement>();
  const theme = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const utterances: HTMLScriptElement = document.createElement("script");

    utterances.onload = (e) => {
      let cnt = 0;
      for (let i = 0; i < containerRef.current.children.length; i++) {
        if (containerRef.current.children[i].nodeName == "DIV") {
          cnt++;
          (containerRef.current.children[i].children[0] as HTMLIFrameElement).onload = ((e) => {
            setLoaded(true);
          });
        }
      }

      // 테마 변경으로 댓긆창이 여러개 로딩되면 마지막것만 남기고 제거
      if (cnt > 1) {
        for (let i = 0; i < containerRef.current.children.length - 1; i++) {
          if (containerRef.current.children[i].nodeName == "DIV") {
            containerRef.current.removeChild(containerRef.current.children[i]);
          }
        }
      }
    };

    const attributes = {
      src: "https://utteranc.es/client.js",
      repo: "heyask/heyask.github.io",
      "issue-term": "pathname",
      label: "comment",
      theme: `github-${theme.key}`,
      crossOrigin: "anonymous",
      async: "false",
      defer: "true"
    };
    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });
    containerRef.current.appendChild(utterances);
  }, [location.pathname, theme.key]);

  return <div ref={containerRef} css={css`
    min-height: 269px;
    ${loaded && css`
    iframe {
      animation: ${fadeIn} 2s;
    }
    `}
  `} />;
}