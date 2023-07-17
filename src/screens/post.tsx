import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Header } from "../components/header";
import { Image } from "expo-image";
import { Title } from "../components/custom/title";
import { Divider } from "../components/custom/divider";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";

const comments = [
  {
    id: "1",
    name: "ahmad",
    text: "go",
  },
  {
    id: "2",
    name: "Maruf",
    text: "lets go",
  },
  {
    id: "3",
    name: "Shakib",
    text: "it is not important",
  },
  {
    id: "4",
    name: "come",
    text: "go for it",
  },
  {
    id: "5",
    name: "x",
    text: "for sure",
  },
  {
    id: "6",
    name: "elon mosk",
    text: "lets connect",
  },
  {
    id: "7",
    name: "mahmood",
    text: "that was my idea",
  },
  {
    id: "8",
    name: "go",
    text: "i have to be with you",
  },
  {
    id: "9",
    name: "khalid",
    text: "you know if you stay heaven is here",
  },
  {
    id: "10",
    name: "app",
    text: "I’m slowly trying to reply to everyone’s comments and dm’s but with all the life stuff going on, it’ll take me a minute lol. Had a session with some coding friends as we’re planning our next project together!! This is the biggest project yet!! Also, trying out a new tech stack!🤞🏾",
  },
];

export const Post = () => {
  const _handleChange = (text) => {
    console.log("vlaues are: ", text);
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
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
            Quick question... What do you think it's the purpose of build
            software in public? 👀 Wrong answers only 😁 #buildinpublic`
          </Text>
        </View>
        <Divider />
        <View style={styles.commentContainer}>
          {comments.map((item) => {
            return (
              <Comment key={item.id} comment={item?.text} name={item?.name} />
            );
          })}
        </View>
        <TextInput style={styles.input} onChangeText={_handleChange} />
      </KeyboardAwareScrollView>
    </View>
  );
};

const Comment = ({ comment, name }) => {
  return (
    <View style={styles.postContainer}>
      <Image
        source={
          "https://media1.popsugar-assets.com/files/thumbor/kfg2lRQYsjKzz6eBeuMN9I9NUUY/0x49:2219x2268/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/02/04/699/n/44701584/5437a292601c16d9e44d22.63502940_/i/who-is-josephine-langford-facts.jpg"
        }
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Title>{name}</Title>
        <Text>{comment}</Text>
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
  commentContainer: {
    paddingHorizontal: 16,
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
  comment: {
    fontSize: 16,
    fontWeight: "500",
  },
  postContainer: {
    flexDirection: "row",
    paddingVertical: 12,
    columnGap: 12,
  },
  textContainer: {
    width: 0,
    flexGrow: 1,
  },
  input: {
    height: 32,
    borderColor: "#00000034",
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 12,
    paddingHorizontal: 4,
  },
});
