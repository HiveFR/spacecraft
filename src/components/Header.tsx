import { View, StyleSheet } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <View style={[styles.headerContainer]}>
      <Text variant="headlineMedium" style={[styles.headerText]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#6750A4",
    alignItems: "center",
    justifyContent: "center",
    height: 256,
  },
  headerText: {
    fontWeight: "800",
    textTransform: "uppercase",
    color: "white",
  },
});
