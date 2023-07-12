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
          <ScrollView></ScrollView>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
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
});
