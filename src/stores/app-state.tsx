import { atom } from "recoil";

export const skipState = atom({
  key: "skipAnimation",
  default: false
});