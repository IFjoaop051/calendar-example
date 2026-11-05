import { NavigationContainer } from "@react-navigation/native";
import ShortenerHomeScreen from "./shortener";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ShortenerHomeScreen">
        <Stack.Screen
          name="ShortenerHomeScreen"
          component={ShortenerHomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
