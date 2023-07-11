import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import { ArrowLeftSvg } from "../icons";
import { useNavigation } from "@react-navigation/native";
import { Title } from "./custom/title";

const width = Dimensions.get("window").width;

export const Header = () => {
  const navigation = useNavigation();

  const _handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={_handleBackPress} style={styles.icon}>
        <ArrowLeftSvg />
      </Pressable>
      <Title>Tweet</Title>
      <View style={styles.icon} />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 53,
    width: width,
    paddingHorizontal: 16,
    backgroundColor: "#fafafa",
  },
  icon: {
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
