import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "surface";
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    type === "surface" ? "surface" : "background",
  );

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
