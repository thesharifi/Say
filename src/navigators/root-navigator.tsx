import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Post } from "../screens";
import { HOME, POST } from "../constants/screens";

export type RootStackParamList = {
  [HOME]: undefined;
  [POST]: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={HOME}
      >
        <Stack.Screen component={Home} name={HOME} />
        <Stack.Screen component={Post} name={POST} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
