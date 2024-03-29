import * as React from "react";
import "./src/styles/normalize.css";
import "./src/styles/fonts.css";
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