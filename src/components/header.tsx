import * as React from "react";
import { useTheme, css } from "@emotion/react";
import { useRecoilState } from "recoil";
import { light, dark, themeState } from "../styles/theme";
import Link from "./link";
import lottie, { AnimationItem } from "lottie-web";
import { useEffect, useMemo, useRef } from "react";
import Button from "./button";

const Header = ({ data }: any) => {
  const [appTheme, setAppTheme] = useRecoilState(themeState);
  const theme = useTheme();
  const sun = useRef();
  let sunAnim = useRef<any>();

  useEffect(() => {
    if (!sunAnim.current) {
      sunAnim.current = lottie.loadAnimation({
        container: sun.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: require("../assets/anim/sun.json")
      });
    }
  }, []);

  useEffect(() => {
    sunAnim.current.setDirection(theme.key == light.key ? -1 : 1);
    sunAnim.current.play();
  }, [theme]);


  return (
    <div css={css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: ${theme.colors.default[0]};
      z-index: 999;
      border-bottom: 1px solid ${theme.colors.default[1]};
    `}>
      <div css={css`
        margin: 0 auto;
        padding: 0 24px;
        max-width: ${theme.breakpoints[3]}px;
        display: flex;
        align-items: center;
      `}>
        <div>
          <Link to="/" style={css`
          font-size: 16pt;
        `}>
            {data.site?.siteMetadata?.title}
          </Link>
        </div>
        <div css={css`flex-grow: 1;`} />
        <Link to={"/"} style={css`
          padding: 10px;
          margin-right: 10px;
        `} a={css`padding: 5px;`}>홈</Link>
        <Link to={"/about"} style={css`
          padding: 10px;
        `}>소개</Link>
        <Button style={css`
          width: 50px;
          height: 50px;
          padding: 10px;
          margin: 5px 0;
        `} onClick={e => {
          setAppTheme(appTheme == light.key ? dark.key : light.key);
        }}>
          <span ref={sun} css={css`
            svg {
              filter: invert(${theme.key == "dark" ? 80 : 20}%);
              transition: filter 1s;
            }
          `} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
