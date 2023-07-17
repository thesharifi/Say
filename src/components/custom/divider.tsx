import { StyleSheet, View } from "react-native";

export const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#00000040",
  },
});
