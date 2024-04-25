// import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/LoginScreen";
import { TermsScreen } from "../screens/TermsScreen";

const Stack = createNativeStackNavigator();

export function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false
          }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Terms"
          options={{
            headerShown: false
          }}
          component={TermsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
