import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { css } from "@emotion/react";

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <div css={css`
        margin: 0 auto;
      `}>

      </div>
      <h1>404: 페이지를 찾을 수 없습니다..</h1>
    </Layout>
  );
};

export const Head = () => <Seo title="404: Not Found" children={undefined} lang={undefined} />;

export default NotFoundPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
