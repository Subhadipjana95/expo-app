/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const tintColorLight = "#d97757"; // Claude-like orange/peach tint
const tintColorDark = "#e0a98f";

export const Colors = {
  light: {
    text: "#222222",
    background: "#fbfaf8", // Claude cream background
    tint: tintColorLight,
    icon: "#6b6b6b",
    tabIconDefault: "#6b6b6b",
    tabIconSelected: tintColorLight,
    surface: "#ffffff",
    border: "#e8e6e1",
  },
  dark: {
    text: "#f2f0ed",
    background: "#1a1a1a", // Darker neutral gray
    tint: tintColorDark,
    icon: "#9ba1a6",
    tabIconDefault: "#9ba1a6",
    tabIconSelected: tintColorDark,
    surface: "#242424",
    border: "#333333",
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
