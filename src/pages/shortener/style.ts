import { StyleSheet } from "react-native";


export const shortenerStyles = StyleSheet.create({
  view: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fefeff",
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    fontSize: 26,
    fontWeight: "bold",
  },

  stepContainer: {
    width: "100%",
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  urlInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    padding: 17,
    width: "90%",
  },

  urlButtons: {
    marginTop: 20,
    width: "90%",
    height: 50,
    borderRadius: 50,
    backgroundColor: "#6f71f7",
    justifyContent: "center",
    alignItems: "center",
  },

  urlButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fefeff",
  },
});
