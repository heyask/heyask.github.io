/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
import React from "react";
import { RecoilRoot, useRecoilState } from "recoil";


export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}


export const wrapRootElement = ({ element, props }) => {
  return (
    <RecoilRoot>
      {element}
    </RecoilRoot>
  );
};