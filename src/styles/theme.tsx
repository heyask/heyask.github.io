import { Theme } from "@emotion/react";
import { atom, atomFamily } from "recoil";

interface ThemeGroup {
  light: Theme;
  dark: Theme;
}

const bp = [576, 768, 992, 1000];
export const common = {
  width: {
    "xs": "500px",
    "sm": "600px",
    "md": "1000px",
    "lg": "1200px",
  },
  breakpoints: bp,
  mq: bp.map(bp => `@media (max-width: ${bp}px)`),
};

/**
 * @light theme
 */
export const light: Theme = {
  key: "light",
  colors: {
    primary: "#42a5f5",
    positive: "hotpink",
    negative: "hotpink",
    default: [
      "rgb(255,255,255)",
      "rgb(240,240,240)",
      "rgb(230,230,230)",
      "rgb(220,220,220)",
      "rgb(210,210,210)",
      "rgb(200,200,200)",
      "rgb(190,190,190)",
      "rgb(180,180,180)",
      "rgb(170,170,170)",
      "rgb(160,160,160)",
      "rgb(150,150,150)",
      "rgb(140,140,140)",
      "rgb(130,130,130)",
      "rgb(120,120,120)",
      "rgb(110,110,110)",
      "rgb(100,100,100)",
      "rgb(90,90,90)",
      "rgb(80,80,80)",
      "rgb(70,70,70)",
      "rgb(60,60,60)",
      "rgb(50,50,50)",
      "rgb(40,40,40)",
      "rgb(30,30,30)",
      "rgb(20,20,20)",
      "rgb(10,10,10)",
      "rgb(0,0,0)"
    ]
  },
  ...common
};

/**
 * @dark theme
 */
export const dark: Theme = {
  key: "dark",
  colors: {
    primary: "blue",
    positive: "hotpink",
    negative: "hotpink",
    default: [
      "rgb(0,0,0)",
      "rgb(10,10,10)",
      "rgb(20,20,20)",
      "rgb(30,30,30)",
      "rgb(40,40,40)",
      "rgb(50,50,50)",
      "rgb(60,60,60)",
      "rgb(70,70,70)",
      "rgb(80,80,80)",
      "rgb(90,90,90)",
      "rgb(100,100,100)",
      "rgb(110,110,110)",
      "rgb(120,120,120)",
      "rgb(130,130,130)",
      "rgb(140,140,140)",
      "rgb(150,150,150)",
      "rgb(160,160,160)",
      "rgb(170,170,170)",
      "rgb(180,180,180)",
      "rgb(190,190,190)",
      "rgb(200,200,200)",
      "rgb(210,210,210)",
      "rgb(220,220,220)",
      "rgb(230,230,230)",
      "rgb(240,240,240)",
      "rgb(255,255,255)"
    ]
  },
  ...common
};

export const modes: ThemeGroup = {
  light,
  dark
};

const localStorageEffect = (key: string) => ({ setSelf, trigger, onSet }: any) => {
  if (typeof window != "undefined") {
    const savedValue = localStorage.getItem(key);

    // if (savedValue !== null) {
    //   setSelf(savedValue);
    // }

    onSet((newValue: any, _: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, newValue);
    });
  }
};

export const themeState = atom({
  key: "theme",
  default: "dark",
  effects: [localStorageEffect("theme")]
});