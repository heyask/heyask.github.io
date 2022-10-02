import * as React from "react";
import Seo from "../../components/seo";
import { graphql } from "gatsby";


const DemoIndexPage = ({ data, location }) => {

  return (
    <div>
      asd<br/>asd<br/>asd<br/>asd<br/>asd<br/>asd<br/>asd<br/>asd<br/>asd<br/>asd<br/>asd<br/>asd<br/>
    </div>
  );
};

export const Head = () => <Seo title="404: Not Found" children={undefined} lang={undefined} />;

export default DemoIndexPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;