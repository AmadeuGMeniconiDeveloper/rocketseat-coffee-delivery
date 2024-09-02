import "styled-components";

import { tipography } from "../styles/themes/typography";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: "light" | "dark";
    colors: {
      tints: {
        orange: string;
        yellow: string;
        green: string;
        purple: string;
        red: string;
        gray: string;
      };
      primary: { default: string; light: string; dark: string };
      secondary: { default: string; light: string; dark: string };
      base: {
        title: string;
        subtitle: string;
        text: string;
        label: string;
        hover: string;
        button: string;
        input: string;
        card: string;
        background: string;
        contrast: string;
      };
    };
    tipography: typeof tipography;
  }
}
