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
            line-height: 80px;
            font-weight: 100;
            opacity: 0;
            transform: translateY(10px);
            animation: ${moveTop} 1000ms ${ofs.current.cur}ms, ${fadeIn} 500ms ${ofs.current.cur}ms;
          `}>
          안녕하세요.
        </h1>
        <h1 css={css`
            font-size: 64px;
            line-height: 80px;
            font-weight: 100;
            opacity: 0;
            transform: translateY(10px);
            animation: ${moveTop} 1000ms ${add(ofs, 500)}ms, ${fadeIn} 500ms ${add(ofs)}ms;
          `}>개발자 <strong css={css`font-weight: 800;`}>김승현</strong>입니다.
        </h1>
        <div css={css`
          margin: 80px 0 60px 0;
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
        <div css={css`
          opacity: 0;
          transform: translateY(10px);
          animation: ${moveTop} 1000ms ${add(ofs, 1000)}ms, ${fadeIn} 500ms ${add(ofs)}ms;
        `}>
          <div css={css`display: flex; margin: 50px 0; justify-content: center;`}>
            <TextButton href="https://github.com/heyask" target="_blank">
              <Icon path={mdiGithub} size={1.2} color={`${theme.colors.default[16]}`} />
            </TextButton>
            <div css={css`width: 24px`}/>
            <TextButton href="mailto:sunrivs@gmail.com" target="_blank">
              <Icon path={mdiEmail} size={1.2} color={`${theme.colors.default[16]}`} />
            </TextButton>
          </div>
          <SectionHeader>이력</SectionHeader>
          <div css={css`display: flex;`}>
            <div>
              <img src={`/assets/images/bodit.png`} css={css`width: 50px; margin-right: 24px;`} />
            </div>
            <div>
              <div css={css`display: flex; align-items: center; margin-bottom: 0px;`}>
                <h2 css={css`margin: 0;`}>BODIT</h2>
                <TextButton href="https://bodit.co" target="_blank" css={css`margin-left: 6px;`}><Icon path={mdiLink} size={1} color={theme.colors.default[16]} /></TextButton>
              </div>
              <p css={css`color:${theme.colors.default[16]}; font-weight: 200; font-size: 14px; margin-top: 6px;`}>바딧은 "생체신호 분석 기술로 세상을 건강하게 만드는 혁신 기업"입니다.
                혼자서는 이루지 못하는 뜻 깊은 일을 마음이 맞는 사람들이 모여 회사를 만들면 이룰 수 있다는 믿음으로 세상이 건강하게 만드는데 큰 역할을 하고자 합니다.</p>
              <p css={css`font-size: 14px; color: ${theme.colors.default[16]};`}>Frontend Developer</p>
              <ProjectItem
                title="파머스핸즈"
                date="2021.10 - 2022.04"
                content="송아지에 부착된 센서의 신호를 인공지능 기술로 분석하여 파악한 행동 데이터에 기반하여 질병을 조기발견하고, 농장주에게 행동 데이터를 시각화하여 제공하며 질병 발생시 알림을 주는 서비스"
                test="크로스 플랫폼(Android, iOS) 모바일 앱 설계 및 개발, API 서버 개발, 데이터베이스 스키마 설계"
              />
              <ProjectItem
                title="바디스태모"
                date="2020.10 - 2021.11"
                content="고객에게 착용된 IMU 센서의 신호로부터 안정성과 가동성을 측정하고, 앱에서 결과를 확인하며 리포트 발행을 통해 운동을 맞춤형으로 처방할 수 있는 전문가를 위한 솔루션"
                test="크로스 플랫폼(Android, iOS) 모바일 앱 개발, 파이어베이스 Firestore DB 스키마 설계"
              />
              <ProjectItem
                title="바딧툴박스"
                date="2020.09 - 2021.09"
                content="인공지능 학습용 태깅 데이터 확보를 위한 내부 태깅 프로그램. CCTV 촬영 영상을 보며 행동 태깅 작업을 할 수 있는 PC 앱."
                ttest="크로스 플랫폼(Windows, Mac) PC 앱 개발, API 서버 개발, 데이터베이스 구축, 태깅 작업자 통계 확인용 웹 및 API 개발"
              />
              <ProjectItem
                title="IMU 센서 신호 딥러닝"
                date="2020.06 - 2020.07"
                content="IMU 센서 신호 데이터를 다양한 방법으로 단순화 시킨 후 이미지로 변환시키고, MobileNet 모델을 사용하여 딥러닝 학습을 시켜 정확도를 확인해보는 내부 실험적 프로젝트"
              />
              <ProjectItem
                title="전문가 운동처방 서비스"
                date="2020.04 - 2020.04"
                content="센서에서 측정된 운동 정확도를 기반으로 전문가가 사용자에게 필요한 운동을 처방해주는 프로젝트"
              />
            </div>
          </div>
          <SectionHeader>창업</SectionHeader>
          <div css={css`display: flex;`}>
            <div>
              <span css={css`display: block;width: 50px; margin-right: 24px;`}>&nbsp;</span>
            </div>
            <div>
              <div css={css`display: flex; align-items: center; margin-bottom: 0px;`}>
                <h2 css={css`margin: 0;`}>WNC</h2>
              </div>
              <p css={css`color:${theme.colors.default[16]}; font-weight: 200; font-size: 14px; margin-top: 6px;`}>
                1년간 창업을 진행하였습니다.
              </p>
              <p css={css`font-size: 14px; color: ${theme.colors.default[16]};`}>Full-stack Developer</p>
              <ProjectItem
                title="GetWalk"
                date="2021.10 - 2022.04"
                content="위치 기반의 리워드 적립형 만보기 앱"
              />
            </div>
          </div>
          <div css={css`display: flex;`}>
            <div>
              <img src={`/assets/images/aivesoft.png`} css={css`width: 50px; margin-right: 24px;`} />
            </div>
            <div>
              <div css={css`display: flex; align-items: center; margin-bottom: 0px;`}>
                <h2 css={css`margin: 0;`}>aivesoft</h2>
                <TextButton href="https://aivesoft.com" target="_blank" css={css`margin-left: 6px;`}><Icon path={mdiLink} size={1} color={theme.colors.default[16]} /></TextButton>
              </div>
              <p css={css`color: ${theme.colors.default[16]}; font-weight: 200; font-size: 14px; margin-top: 6px;`}>
                게임 개발을 해본 경험이 있습니다.
              </p>
              <p css={css`font-size: 14px; color: ${theme.colors.default[16]};`}>Full-stack Developer</p>
              <ProjectItem
                title="FlowFly"
                date="2016.03 - 2016.05"
                content="유니티로 만들어본 첫 게임입니다. Flappy Bird를 모티브로 하여 터치하면 위로, 터치를 떼면 밑으로 내려가며 장애물들을 피해 동전을 먹으며 최고점수를 획득하는 게임입니다."
                link="https://youtu.be/BuPZPhIOOSc"
              />
              <ProjectItem
                title="개미 갑부 만들기"
                date="2016.05 - 2016.09"
                content="아무것도 없이 인생을 시작하는 개미를 부자로 만드는 인생시뮬레이션 게임 프로젝트를 진행했었습니다. 두번째로 만들어보는 게임인데도 너무 많은 컨텐츠와 커져가는 스케일로인해 진행도중 중단하게 된 프로젝트입니다. 컨텐츠가 좋았기에 아쉬움이 많이 남는 프로젝트인데, 추후 완료를 계획하고 있습니다."
              />
              <ProjectItem
                title="벽돌공장 키우기"
                date="2016.10 - 2017.01"
                content="공장장이 되어 인부를 고용하여 벽돌을 팔아 돈을벌어 더 큰 공장을 키워나가는 게임입니다."
                link="https://youtu.be/ElXYBZDp2P8"
              />
            </div>
          </div>
          <SectionHeader>상용 프로젝트</SectionHeader>
          <div css={css`display: flex;`}>
            <div>
              <span css={css`display: block;width: 50px; margin-right: 24px;`}>&nbsp;</span>
            </div>
            <div>
              <ProjectItem
                title="위키팁"
                date="2022.05 - 2022.05"
                content="컨텐츠 제공 플랫폼"
                link="https://wikitip.com"
              />
              <ProjectItem
                title="자작곡 공유 커뮤니티"
                date="2021.10 - 2022.04"
              />
            </div>
          </div>
          <SectionHeader>개인 프로젝트</SectionHeader>
          <div css={css`display: flex;`}>
            <div>
              <span css={css`display: block;width: 50px; margin-right: 24px;`}>&nbsp;</span>
            </div>
            <div>
              <ProjectItem
                title="DuckSync"
                date="2019.12 - 2019.12"
                content="파일변경을 감시하여 두 디렉토리간 실시간 동기화를 수행하는 앱"
                link="https://github.com/heyask/DuckSync"
              />
              <ProjectItem
                title="블록체인 중고거래 플랫폼"
                date="2019.10 - 2019.12"
                content="중고거래 시스템을 블록체인으로 구현하는 졸업과제"
                link="https://github.com/nowis530am/blockchain-escrow"
              />
              <ProjectItem
                title="GetHabit"
                date="2019.03 - 2019.06"
                content="커뮤니티에서 사용자간의 인증을 통해 습관 형성을 도와주는 앱"
                link="https://github.com/heyask/PNU-GetHabit-android"
              />
              <ProjectItem
                title="CoffeeFinder"
                date="2017.03 - 2017.06"
                content="각 카페 브랜드 소비자들의 커피 맛 후기글에서 머신러닝을 통해 긍,부정을 판단하고 점수를 사용자에게 제공하는 앱"
                link="https://github.com/heyask/PNU-CoffeeFinder-android"
              />
            </div>
          </div>
          <SectionHeader>학력</SectionHeader>
          <div css={css`display: flex;`}>
            <div>
              <span css={css`display: block;width: 50px; margin-right: 24px;`}>&nbsp;</span>
            </div>
            <div>
              <div css={css`display: flex; align-items: center; margin-bottom: 0px;`}>
                <h2 css={css`margin: 0;`}>부산대학교</h2>
              </div>
              <p css={css`color:${theme.colors.default[16]}; font-weight: 200; font-size: 14px; margin-top: 6px;`}>
                정보컴퓨터공학 전공
              </p>
              <p>졸업</p>
            </div>
          </div>
        </div>
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
