import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { useEffect } from "react";


const Test = ({ to, className, children }: any) => {
  // const theme = useTheme();
  useEffect(() => {
    console.log("test console");
  }, []);
  return (
    <div>asd</div>
  );
};

export default Test;
