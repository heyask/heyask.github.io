import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { css, keyframes, useTheme } from "@emotion/react";
import { fadeIn } from "../styles/keyframes";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { skipState } from "../stores/app-state";
import Icon from "@mdi/react";
import { mdiEmail, mdiGithub, mdiLink } from "@mdi/js";
import TextButton from "../components/text-button";
import ProjectItem from "../components/about/project-item";
import styled from "@emotion/styled";

const SectionHeader = styled.h1`
  margin-top: 80px; 
  vertical-align: center;
  &::before {
    display: inline-block;
    width: 5px;
    height: 24px;
    line-height: 24px;
    margin-right: 12px;
    background: ${props => props.theme.colors.default[25]};
    content: "\\00a0";
  }
`

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const theme = useTheme();
  const moveTop = keyframes`
        // 0% { transform: translateX(30px); }
      100% { transform: translateY(0); }
  `;
  const moveLeft = keyframes`
        // 0% { transform: translateX(30px); }
      100% { transform: translateX(0); }
  `;
  let ofs = useRef({ cur: 0 });
  let timeout = useRef(null);
  const [skipAnimation, setSkipAnimation] = useRecoilState(skipState);
  const [replay, setReplay] = useState(null);

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

  // useEffect(() => {
  //   ofs.current.cur = 0;
  // });

  useEffect(() => {
    clearTimeout(timeout.current);
    if (!skipAnimation) {
      console.log(ofs.current.cur);
      timeout.current = setTimeout(() => {
        setSkipAnimation(true);
      }, ofs.current.cur + 1000);
    }
  }, [skipAnimation]);

  useEffect(() => {
    if (replay) {
      setReplay(false);
    } else if(replay == false) {
      ofs.current.cur = 0;
      setSkipAnimation(false);
    }
  }, [replay]);

  const add = (a, b?) => {
    if (b) {
      a.current.cur += b;
    }
    return a.current.cur;
  };

  if (replay) return <div />;

  if(ofs.current.cur != 0) {
    ofs.current.cur = 0;
  }

  return (
    <Layout location={location} title={siteTitle}>
      <div css={css`
        position: relative;
        display: block;
        max-width: ${theme.breakpoints[3]}px;
        margin: 20px auto 0 auto;
        padding: 0 24px 0 24px;
        * {
          color: ${theme.colors.default[25]};
          animation-fill-mode: forwards !important;
          ${skipAnimation && `animation-duration: 0ms !important; animation-delay: 0ms !important;`}
        }
      `}>
        <span css={css`
          position: absolute;
          top: 40px;
          right: 24px;
          z-index: 1;
          // background: ${theme.colors.default[1]};
          color: ${theme.colors.default[10]};
          font-size: 18px;
          // border-radius: 16px;
          padding: 8px 20px;
          cursor: pointer !important;
          // opacity: 0;
          // animation: ${fadeIn} 1000ms 0ms;
        `}
              onClick={e => {
                if (skipAnimation) {
                  ofs.current.cur = 0;
                  setReplay(true);
                } else
                  setSkipAnimation(!skipAnimation);
              }}>{skipAnimation ? "리플레이" : "넘기기"}
        </span>
        <h1 css={css`
            font-size: 64px;
            line-height: 42px;
            font-weight: 100;
            opacity: 0;
            transform: translateY(10px);
            animation: ${moveTop} 1000ms ${ofs.current.cur}ms, ${fadeIn} 500ms ${ofs.current.cur}ms;
          `}>
          안녕하세요.
        </h1>
        <h1 css={css`
            font-size: 64px;
            line-height: 42px;
            font-weight: 100;
            opacity: 0;
            transform: translateY(10px);
            animation: ${moveTop} 1000ms ${add(ofs, 500)}ms, ${fadeIn} 500ms ${add(ofs)}ms;
          `}>개발자 <strong css={css`font-weight: 800;`}>김승현</strong>입니다.
        </h1>
        <div css={css`
          margin: 60px 0 50px 0;
        `}>
          <h2 css={css`
            font-size: 30px;
            opacity: 0;
            transform: translateY(10px);
            animation: ${moveTop} 1000ms ${add(ofs, 1000)}ms, ${fadeIn} 500ms ${add(ofs)}ms;
          `}>
            주어진 환경에 안주하지 않고
          </h2>
          <h2 css={css`
            font-size: 30px;
            opacity: 0;
            transform: translateY(10px);
            animation: ${moveTop} 1000ms ${add(ofs, 500)}ms, ${fadeIn} 500ms ${add(ofs)}ms;
          `}>
            어제보다 나은 오늘이 되기 위해
          </h2>
          <h2 css={css`
            font-size: 30px;
            opacity: 0;
            transform: translateY(10px);
            animation: ${moveTop} 1000ms ${add(ofs, 500)}ms, ${fadeIn} 500ms ${add(ofs)}ms;
          `}>
            끊임없이 성장하고자 합니다.
          </h2>
        </div>
        <p css={css`
          font-size: 20px;
          line-height: 36px;
          transform: translateX(10px);
          opacity: 0;
          animation: ${moveLeft} 1000ms ${add(ofs, 1000)}ms, ${fadeIn} 500ms ${add(ofs)}ms;
        `}>
          코드의 확장성, 모듈화를 고려함과 동시에 가독성을 항상 생각하면서 누가 보더라도 쉽게 이해할 수 있는 코드를 작성하고자 노력합니다.
          웹 풀스택 엔지니어로서 다수의 프로젝트를 진행했던 경험으로 기획부터 출시까지의 사이클을 잘 이해하고 있습니다.
          이러한 경험들을 바탕으로 유관 부서들의 업무 이해도가 높은 것이 가장 큰 장점입니다.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" children={undefined} lang={undefined} />;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        #        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        #            nodes {
        #                excerpt
        #                fields {
        #                    slug
        #                }
        #                frontmatter {
        #                    date(formatString: "MMMM DD, YYYY")
        #                    title
        #                    description
        #                }
        #            }
        #        }
    }
`;
