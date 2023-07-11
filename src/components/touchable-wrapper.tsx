import { FC } from "react";
import { Pressable, PressableProps } from "react-native";

export const TouchableWrapper: FC<PressableProps> = ({ children, ...rest }) => {
  return <Pressable {...rest}>{children}</Pressable>;
};
