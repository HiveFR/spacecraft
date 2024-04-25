import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import { Header } from "../components/Header";

export const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const [loginText, setLoginText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  function navigateToTerms() {
    navigation.navigate("Terms");
  }

  return (
    <>
      <Header title="SpaceCraft" />
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

        <TouchableOpacity onPress={navigateToTerms}>
          <Text style={[styles.termsText]}>Read Terms and Conditions</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    padding: 16
  },
  loginButton: {
    marginVertical: 32,
    marginHorizontal: 16
  },
  termsText: {
    textAlign: "center"
  }
});
