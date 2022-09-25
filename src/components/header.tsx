import * as React from "react";
import { Link } from "gatsby";
import { css, cx } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { useRecoilState } from "recoil";
import { light, dark, themeState } from "../styles/theme";

const Header = ({ location, title }) => {
  const [appTheme, setAppTheme] = useRecoilState(themeState);
  const theme = useTheme();

  return (
    <div>
      <Link className="header-link-home" to="/">
        {title}
      </Link>
      <div style={{ color: theme.colors.primary }}>asdasdsa</div>

      <button onClick={e => {
        setAppTheme(appTheme == light.key ? dark.key : light.key);
      }}>
        다크모드
      </button>
    </div>
  );
};

export default Header;
