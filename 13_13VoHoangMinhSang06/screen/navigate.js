import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Home";
import screen2 from "./screen2";
import screen3 from "./screen3";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        ></Stack.Screen>

        <Stack.Screen
          name="screen2"
          component={screen2}
          options={{ headerShown: false }}
        ></Stack.Screen>

        <Stack.Screen
          name="screen3"
          component={screen3}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;