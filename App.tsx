import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import { Header } from "./src/components/Header";
import { LoginScreen } from "./src/screens/LoginScreen";

export default function App() {
  return (
    <PaperProvider>
      <Header title="SpaceCraft" />
      <LoginScreen />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
