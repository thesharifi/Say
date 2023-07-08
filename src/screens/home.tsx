import { useCallback } from "react";
import { FlatList, Text, View } from "react-native";
import { Post } from "../components/post";

const posts = [
  {
    id: "1",
    title: "first post",
    description: "first post description",
  },
  {
    id: "2",
    title: "first post",
    description: "first post description",
  },
  {
    id: "3",
    title: "first post",
    description: "first post description",
  },
  {
    id: "4",
    title: "first post",
    description: "first post description",
  },
  {
    id: "5",
    title: "first post",
    description: "first post description",
  },
  {
    id: "6",
    title: "first post",
    description: "first post description",
  },
  {
    id: "7",
    title: "first post",
    description: "first post description",
  },
];

const keyExtractor = (data) => {
  return data.id;
};

export const Home = () => {
  const _handleRenderItem = useCallback(({ item }) => {
    return <Post title={item.title} description={item.description} />;
  }, []);

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={_handleRenderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};
