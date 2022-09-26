import * as React from "react";
import { useTheme, css } from "@emotion/react";
import { useRecoilState } from "recoil";
import { light, dark, themeState } from "../styles/theme";
import Link from "./link";
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef } from "react";
import Button from "./button";

const sunAnim = require("../assets/anim/sun.json");

const Header = ({ data }: any) => {
  const [appTheme, setAppTheme] = useRecoilState(themeState);
  const theme = useTheme();
  const sun = useRef<Player>();

  useEffect(() => {
    if (sun.current) {
      sun.current?.setPlayerDirection(theme.key == light.key ? -1 : 1);
      sun.current?.play();
    }

  }, [theme.key]);


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
          font-family: 'Nanum Gothic';
          font-weight: bold;
          font-size: 16pt;
        `}>
            {data.site?.siteMetadata?.title}
          </Link>
        </div>
        <div css={css`flex-grow: 1;`} />
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
          <span
            css={css`
            svg {
              filter: invert(${theme.key == "dark" ? 80 : 20}%);
              transition: filter 1s;
            }
          `}>
            <Player
              ref={sun}
              src={sunAnim}
              keepLastFrame
              style={{ height: "30px", width: "30px", color: "red" }} />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
