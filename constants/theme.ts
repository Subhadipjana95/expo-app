/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const tintColorLight = "#6C5CE7"; // Primary Purple
const tintColorDark = "#a29bfe";

export const Colors = {
  light: {
    text: "#2D3436",
    background: "#F0F2F5",
    tint: tintColorLight,
    icon: "#636E72",
    tabIconDefault: "#636E72",
    tabIconSelected: tintColorLight,
    surface: "#FFFFFF",
    border: "#DFE6E9",
    primary: "#6C5CE7",
    secondary: "#FAB1A0",
    accent: "#00CEC9",
    yellow: "#FDCB6E",
    green: "#55EFC4",
    purple: "#6C5CE7",
  },
  dark: {
    text: "#DFE6E9",
    background: "#2D3436",
    tint: tintColorDark,
    icon: "#B2BEC3",
    tabIconDefault: "#B2BEC3",
    tabIconSelected: tintColorDark,
    surface: "#3a4143",
    border: "#444444",
    primary: "#a29bfe",
    secondary: "#ff7675",
    accent: "#81ECEC",
    yellow: "#ffeaa7",
    green: "#a29bfe",
    purple: "#a29bfe",
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
