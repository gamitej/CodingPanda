// theme
import { bespin } from "@uiw/codemirror-theme-bespin";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { xcodeDark, xcodeLight } from "@uiw/codemirror-theme-xcode";
import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import { duotoneDark, duotoneLight } from "@uiw/codemirror-theme-duotone";
// types
import { ThemeTypes } from "../type";

export const getTheme = (theme: ThemeTypes) => {
  switch (theme) {
    case "bespin":
      return bespin;
    case "okaidia":
      return okaidia;
    case "dracula":
      return dracula;
    case "xcodeDark":
      return xcodeDark;
    case "githubDark":
      return githubDark;
    case "vscodeDark":
      return vscodeDark;
    case "xcodeLight":
      return xcodeLight;
    case "githubLight":
      return githubLight;
    case "duotoneDark":
      return duotoneDark;
    case "duotoneLight":
    default:
      return duotoneLight;
  }
};
