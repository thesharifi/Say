import { StatusBar } from "react-native";
import { RootNavigator } from "./src/navigators/root-navigator";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </>
  );
}
