import { DefaultTheme } from "styled-components/dist/types";
import { tipography } from "./typography";

type ThemeMode = "light" | "dark";

export const lightTheme: DefaultTheme = {
  mode: "light" as ThemeMode,
  colors: {
    tints: {
      orange: "#C47F17",
      yellow: "#DBAC2C",
      green: "#00856F",
      purple: "#8047F8",
      red: "#E25858",
      gray: "#272221",
    },
    primary: { default: "#DBAC2C", light: "#F1E9C9", dark: "#C47F17" },
    secondary: { default: "#8047F8", light: "#EBE5F9", dark: "#4B2995" },
    base: {
      title: "#272221",
      subtitle: "#403937",
      text: "#574F4D",
      label: "#8D8686",
      hover: "#D7D5D5",
      button: "#E6E5E5",
      input: "#EDEDED",
      card: "#F3F2F2",
      background: "#FAFAFA",
      contrast: "#FFFFFF",
    },
  },
  tipography: tipography,
};
