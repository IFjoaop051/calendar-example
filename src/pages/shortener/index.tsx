import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { shortenerStyles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";


function ShortenerHomeScreen() {
  const { navigate } = useNavigation();
  const [urlInput, setUrlInput] = useState<string>("");

  return (
    <View style={shortenerStyles.view}>
      <Text style={shortenerStyles.heading}>Encurtador de URL</Text>
      <View style={shortenerStyles.stepContainer}>
        <TextInput
          style={shortenerStyles.urlInput}
          value={urlInput}
          onChangeText={setUrlInput}
          placeholder="Digite a URL (e.g. https://google.com)"
        />
        <TouchableOpacity style={shortenerStyles.urlButtons}>
          <Text style={shortenerStyles.urlButtonText}>Encurtar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={shortenerStyles.urlButtons}
          onPress={() => navigate("ShortenerHistoryScreen")}
        >
          <Text style={shortenerStyles.urlButtonText}>Abrir histórico</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ShortenerHomeScreen;
