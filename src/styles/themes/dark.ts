import { tipography } from "./typography";

type ThemeMode = "light" | "dark";

export const darkTheme = {
  mode: "light" as ThemeMode,
  colors: {
    tints: {
      orange: "#C47F17",
      yellow: "#DBAC2C",
      green: "#00856F",
      purple: "#8047F8",
      red: "#E25858",
      gray: "#D7D5D5",
    },
    primary: { default: "#DBAC2C", light: "#F1E9C9", dark: "#C47F17" },
    secondary: { default: "#8047F8", light: "#EBE5F9", dark: "#4B2995" },
    base: {
      title: "#FFFFFF",
      subtitle: "#FAFAFA",
      text: "#F3F2F2",
      label: "#FDFDFD",
      hover: "#E6E5E5",
      button: "#272221",
      input: "#FDF6F6",
      card: "#373231",
      background: "#272221",
      contrast: "#171211",
    },
  },
  tipography: tipography,
} as const;
