// import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/LoginScreen";
import { TermsScreen } from "../screens/TermsScreen";

const Stack = createNativeStackNavigator();

export function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        name="Terms"
        component={TermsScreen}
      />
    </NavigationContainer>
  );
}
