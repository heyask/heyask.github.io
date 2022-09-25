import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    key: string,
    colors: {
      primary: string
      positive: string
      negative: string
    }
  }
}