import { NavigationContainer } from "@react-navigation/native";
import ShortenerHistoryScreen from "./shortener/history";
import ShortenerHomeScreen from "./shortener";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ShortenerHomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="ShortenerHomeScreen"
          component={ShortenerHomeScreen}
        />
        <Stack.Screen
          name="ShortenerHistoryScreen"
          component={ShortenerHistoryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
