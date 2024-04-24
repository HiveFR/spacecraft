import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";

export const LoginScreen = () => {
  const [loginText, setLoginText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  return (
    <>
      <View style={[styles.loginContainer]}>
        <TextInput
          label="Email"
          autoComplete="email"
          keyboardType="email-address"
          returnKeyType="next"
          value={loginText}
          onChangeText={(loginText) => setLoginText(loginText)}
        />

        <TextInput
          secureTextEntry={true}
          autoComplete="password"
          label="Password"
          value={passwordText}
          onChangeText={(passwordText) => setPasswordText(passwordText)}
        />

        <Button
          style={[styles.loginButton]}
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Login
        </Button>

        <Text style={[styles.termsText]}>Read Terms and Conditions</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    padding: 16,
  },
  loginButton: {
    marginVertical: 32,
    marginHorizontal: 16,
  },
  termsText: {
    textAlign: "center",
  },
});
