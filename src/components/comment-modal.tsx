import { ReactNode, useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { TouchableWrapper } from "./touchable-wrapper";
import { Image } from "expo-image";
import { Title } from "./custom/title";

interface CommentModalProps {
  children: ReactNode;
  iconStyle: ViewStyle;
}

export const CommentModal = ({ children, iconStyle }) => {
  const [isVisible, setIsVisible] = useState(false);

  const _handleToggleModal = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <TouchableWrapper onPress={_handleToggleModal} style={iconStyle}>
        {children}
      </TouchableWrapper>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableWrapper onPress={_handleToggleModal}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableWrapper>
            <TouchableWrapper onPress={_handleToggleModal} style={styles.post}>
              <Text style={styles.postText}>Post</Text>
            </TouchableWrapper>
          </View>
          <ScrollView style={styles.scrollViewContainer}>
            <Post
              title="first post"
              description={`Quick question...

What do you think it's the purpose of build software in public? 👀

Wrong answers only 😁

#buildinpublic`}
            />
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

const Post = ({ title, description }) => {
  return (
    <View style={styles.postContainer}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  scrollViewContainer: {
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 25,
    height: 45,
    width: "100%",
    backgroundColor: "#fafafa",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  post: {
    borderRadius: 40,
    backgroundColor: "#1D9BF0",
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  postText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  cancelText: {
    fontSize: 16,
  },
  postContainer: {
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
});
