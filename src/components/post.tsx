import { Image } from "expo-image";
import { FC, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { POST } from "../constants/screens";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigators/root-navigator";
import { Title } from "./custom/title";
import { TouchableWrapper } from "./touchable-wrapper";
import { CommentSvg, FilledHeartSvg, HeartSvg } from "../icons";
import { CommentModal } from "./comment-modal";

interface PostProps {
  title: string;
  id: string;
  description: string;
  navigation?: NavigationProp<RootStackParamList>;
}

export const Post: FC<PostProps> = ({ title, description, navigation, id }) => {
  const [liked, setLiked] = useState(false);

  const _handlePostPress = () => {
    if (navigation) {
      navigation.navigate(POST, { id });
    }
  };

  const _handleLikePress = () => {
    setLiked((prev) => !prev);
  };

  return (
    <>
      <Pressable onPress={_handlePostPress}>
        <View style={styles.container}>
          <Image
            source={
              "https://media1.popsugar-assets.com/files/thumbor/kfg2lRQYsjKzz6eBeuMN9I9NUUY/0x49:2219x2268/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/02/04/699/n/44701584/5437a292601c16d9e44d22.63502940_/i/who-is-josephine-langford-facts.jpg"
            }
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Title>{title}</Title>
            <Text>{description}</Text>
          </View>
        </View>
      </Pressable>
      <View style={styles.bottomWrapper}>
        <CommentModal iconStyle={styles.icon}>
          <CommentSvg />
        </CommentModal>
        <TouchableWrapper style={styles.icon} onPress={_handleLikePress}>
          {liked ? <FilledHeartSvg fill="#f91880" /> : <HeartSvg />}
        </TouchableWrapper>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 12,
    columnGap: 12,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 999,
  },
  textContainer: {
    width: 0,
    flexGrow: 1,
  },
  bottomWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  icon: {
    padding: 5,
    borderRadius: 999,
  },
});
