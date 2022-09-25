import React from "react";
import "./src/normalize.css";
import "typeface-nanum-gothic";
import "prismjs/themes/prism.css";
import { RecoilRoot } from "recoil";

export const wrapRootElement = ({ element, props }) => {
  return (
    <RecoilRoot>
      {element}
    </RecoilRoot>
  );
};