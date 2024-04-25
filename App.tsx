// import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { NetworkProvider } from "react-native-offline";

import { Header } from "./src/components/Header";
// import { LoginScreen } from "./src/screens/LoginScreen";
// import { TermsScreen } from "./src/screens/TermsScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";
// import { ScreenContainer } from "./src/components/ScreenContainer";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <Header title="SpaceCraft" />

        <StarshipFeedScreen />
      </PaperProvider>
    </QueryClientProvider>
  );
}
