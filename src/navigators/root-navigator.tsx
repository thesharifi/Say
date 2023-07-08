import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/home";
import { HOME } from "../constants/screens";

const Stack = createNativeStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
