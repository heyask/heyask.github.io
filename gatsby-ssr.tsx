/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
import React from "react";
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