import React from "react";
import "./src/styles/normalize.css";
import "typeface-nanum-gothic";
import "prismjs/themes/prism.css";
// import "./src/styles/style.css";
import { RecoilRoot } from "recoil";
import BaseLayout from "./src/components/base-layout";

export const wrapPageElement = ({ element, props }) => {
  return <BaseLayout {...props}>{element}</BaseLayout>;
};

export const wrapRootElement = ({ element }) => {
  return (
    <RecoilRoot>
      {element}
    </RecoilRoot>
  );
};