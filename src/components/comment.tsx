import React, { createRef, useEffect } from "react";
import { useTheme } from "@emotion/react";

export default function Comment({ location }) {
  const containerRef = createRef<HTMLDivElement>();
  const theme = useTheme();

  useEffect(() => {
    const utterances = document.createElement("script");
    const attributes = {
      src: "https://utteranc.es/client.js",
      repo: "heyask/heyask.github.io",
      "issue-term": "title",
      label: "comment",
      theme: `github-${theme.key}`,
      crossOrigin: "anonymous",
      async: "true"
    };
    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });
    containerRef.current.appendChild(utterances);
  }, [location, theme]);

  return <div ref={containerRef} />;
}