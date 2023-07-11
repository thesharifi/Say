import { FC } from "react";
import { StyleSheet, Text } from "react-native";

interface TitleProps {
  children: string;
}

export const Title: FC<TitleProps> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
  },
});
