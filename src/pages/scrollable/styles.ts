import { StyleSheet } from "react-native";


export const scrollableStyles = StyleSheet.create({
  view: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fefeff",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    paddingTop: 20,
    paddingBottom: 50,
    paddingInline: 12,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  splitContainer: {
    width: "100%",
    flex: 1,
    marginTop: 42.5,
  },

  paragraph: {
    width: "100%",
    textAlign: "justify",
    fontWeight: "normal",
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 50,
    objectFit: "cover",
  },
});
