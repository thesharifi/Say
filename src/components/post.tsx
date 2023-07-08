import { FC } from "react";
import { Text, View } from "react-native";

interface PostProps {
  title: string;
  description: string;
}

export const Post: FC<PostProps> = ({ title, description }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};
