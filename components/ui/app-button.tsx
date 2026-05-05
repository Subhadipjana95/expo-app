import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { IconSymbol } from "./icon-symbol";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  icon?: string;
  variant?: "primary" | "secondary";
}

export function AppButton({
  title,
  onPress,
  style,
  icon,
  variant = "primary",
}: ButtonProps) {
  const colorScheme = useColorScheme() ?? "light";
  const bgColor =
    variant === "primary"
      ? Colors[colorScheme].yellow
      : Colors[colorScheme].primary;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: bgColor }, style]}
    >
      <Text style={styles.text}>{title}</Text>
      {icon && (
        <IconSymbol
          name={icon as any}
          size={18}
          color="white"
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    gap: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  icon: {
    marginLeft: 4,
  },
});
