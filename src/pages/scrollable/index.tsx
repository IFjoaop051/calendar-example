import { Image, ScrollView, Text, View, type ViewStyle } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import { scrollableStyles } from "./styles";
import { useMemo } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";


/* eslint-disable @typescript-eslint/no-require-imports */

const INSETS_PROP_KEYS = [ "top", "left", "right", "bottom" ] as const;

function ScrollablePage() {
  const insets = useSafeAreaInsets();

  // Obviously over-engineering.
  // I'm just testing some things.
  // And this is a stupid way to get "insetStyles".
  // Do no repeat it.
  const insetStyles = useMemo(() => {
    return INSETS_PROP_KEYS.reduce((o, k) => {
      if(!Object.prototype.hasOwnProperty.call(insets, k)) {
        throw new Error(`Unknown inset property key "${k}"`);
      }

      o[`padding${(k[0].toUpperCase() + k.slice(1))}` as "paddingTop"] = insets[k];
      return o;
    }, {} as ViewStyle);
  }, [insets]);
  
  return (
    <View
      style={{
        ...scrollableStyles.view,
        ...insetStyles,
      }}
    >
      <ScrollView
        contentContainerStyle={scrollableStyles.container}
        style={{ width: "100%", flex: 1 }}
      >
        <View>
          <Image
            style={{ ...scrollableStyles.image, marginTop: 0 }}
            source={require("../../../assets/mrbinz-vietnam-10445204_1920.jpg")}
          />
          <Image
            style={scrollableStyles.image}
            source={require("../../../assets/yaomuyu-child-10501283_1920.jpg")}
          />
          <Image
            style={scrollableStyles.image}
            source={require("../../../assets/ylanite_nietjuhart-autumn-10512303_1920.jpg")}
          />
          <Image
            style={scrollableStyles.image}
            source={{ uri: "https://picsum.photos/200.webp", cache: "reload" }}
          />
        </View>
        <View style={scrollableStyles.splitContainer}>
          <Text style={scrollableStyles.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga rerum voluptatem quidem delectus. Soluta quisquam ipsa repudiandae nemo libero, amet quod natus? Dolorum, tempore sint!</Text>
        </View>
        <View style={scrollableStyles.splitContainer}>
          <YoutubeIframe videoId="u31qwQUeGuM" height={280} />
        </View>
      </ScrollView>
    </View>
  );
}

export default ScrollablePage;
