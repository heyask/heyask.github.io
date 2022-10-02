import * as React from "react";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import Link from "../link";
import TextButton from "../text-button";
import Icon from "@mdi/react";
import { mdiLink } from "@mdi/js";

const ProjectItem = ({ title, content, date, detail, link, ...props }: any) => {
  const theme = useTheme();
  return (
    <div css={css`border-left: 5px solid ${theme.colors.default[1]}; padding-left: 24px; margin-bottom: 36px;`}>
      <h3 css={css`margin-top: 0;`}>{title} <small css={css`font-weight: 300;`}>{date}</small></h3>
      <div>
        <p css={css`line-height: 24px;`}>{content}</p>
        <p css={css`display: flex;`}>
          {detail && <TextButton href="#" target="_blank" css={css`background: ${theme.colors.default[1]}; margin-right: 12px;`}>자세히</TextButton>}
          {link && <TextButton href={link} target="_blank" css={css`background: ${theme.colors.default[1]}`}><Icon path={mdiLink} size={1} color={theme.colors.default[16]} /></TextButton>}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
