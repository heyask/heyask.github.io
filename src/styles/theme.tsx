import { Theme } from "@emotion/react";
import { atom, atomFamily } from "recoil";

interface ThemeGroup {
  light: Theme;
  dark: Theme;
}

/**
 * @light theme
 */
export const light: Theme = {
  key: "light",
  colors: {
    primary: "hotpink",
    positive: "hotpink",
    negative: "hotpink"
  }
};

/**
 * @dark theme
 */
export const dark: Theme = {
  key: "dark",
  colors: {
    primary: "blue",
    positive: "hotpink",
    negative: "hotpink"
  }
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