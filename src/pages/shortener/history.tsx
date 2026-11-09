import { Text, View } from "react-native";
import { shortenerStyles } from "./style";


function ShortenerHistoryScreen() {
  return (
    <View style={shortenerStyles.view}>
      <Text style={shortenerStyles.heading}>Histórico de Links</Text>
    </View>
  );
}

export default ShortenerHistoryScreen;
