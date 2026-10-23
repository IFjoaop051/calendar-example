import { SafeAreaProvider } from "react-native-safe-area-context";
import ScrollablePage from "./src/pages/scrollable";

export default function App() {
  return (
    <SafeAreaProvider>
      <ScrollablePage />
    </SafeAreaProvider>
  );
}
