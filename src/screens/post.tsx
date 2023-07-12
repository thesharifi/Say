import { StyleSheet, Text, View } from "react-native";
import { Header } from "../components/header";
import { Image } from "expo-image";
import { Title } from "../components/custom/title";

export const Post = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.header}>
        <View style={styles.postHeader}>
          <Image
            source={
              "https://media1.popsugar-assets.com/files/thumbor/kfg2lRQYsjKzz6eBeuMN9I9NUUY/0x49:2219x2268/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/02/04/699/n/44701584/5437a292601c16d9e44d22.63502940_/i/who-is-josephine-langford-facts.jpg"
            }
            style={styles.image}
          />
          <View style={styles.nameWrapper}>
            <Title>Maruf</Title>
            <Text>@marufSharifi</Text>
          </View>
        </View>
        <Text style={styles.postText}>
          Quick question... What do you think it's the purpose of build software
          in public? 👀 Wrong answers only 😁 #buildinpublic`
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  header: {
    paddingHorizontal: 16,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 4,
    columnGap: 12,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 999,
  },
  nameWrapper: {
    rowGap: 4,
  },
  postText: {
    paddingVertical: 20,
  },
});
