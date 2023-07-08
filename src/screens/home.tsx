import { useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Post } from "../components/post";

const posts = [
  {
    id: "1",
    title: "first post",
    description: `Quick question...

What do you think it's the purpose of build software in public? 👀

Wrong answers only 😁

#buildinpublic`,
  },
  {
    id: "2",
    title: "first post",
    description: `Quick question...

What do you think it's the purpose of build software in public? 👀

Wrong answers only 😁

#buildinpublic`,
  },
  {
    id: "3",
    title: "first post",
    description: `Quick question...

What do you think it's the purpose of build software in public? 👀

Wrong answers only 😁

#buildinpublic`,
  },
  {
    id: "4",
    title: "first post",
    description: `Quick question...

What do you think it's the purpose of build software in public? 👀

Wrong answers only 😁

#buildinpublic`,
  },
  {
    id: "5",
    title: "first post",
    description: `Quick question...

What do you think it's the purpose of build software in public? 👀

Wrong answers only 😁

#buildinpublic`,
  },
  {
    id: "6",
    title: "first post",
    description: `Quick question...

What do you think it's the purpose of build software in public? 👀

Wrong answers only 😁

#buildinpublic`,
  },
  {
    id: "7",
    title: "first post",
    description: `Quick question...

What do you think it's the purpose of build software in public? 👀

Wrong answers only 😁

#buildinpublic`,
  },
];

const keyExtractor = (data) => {
  return data.id;
};

export const Home = ({ navigation }) => {
  const _handleRenderItem = useCallback(({ item }) => {
    return (
      <Post
        id={item?.id}
        title={item.title}
        description={item.description}
        navigation={navigation}
      />
    );
  }, []);

  const _handleRenderSeparator = useCallback(() => {
    return <View style={styles.divider} />;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={_handleRenderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={_handleRenderSeparator}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingTop: 20,
    height: "100%",
  },
  divider: {
    borderTopWidth: 1,
    borderColor: "gray",
    width: "100%",
    borderTopEndRadius: 100,
  },
});
