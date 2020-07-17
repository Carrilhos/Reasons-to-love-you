import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text1: {
    fontFamily: "DancingScript_400Regular",
    fontSize: 30,
    flex: 1,
    color: "#fff",
    paddingTop: 80
  },
  text2: {
    fontFamily: "DancingScript_400Regular",
    fontSize: 30,
    flex: 1,
    color: "#fff",
    paddingBottom: 80,
    paddingHorizontal: 10,
    textAlign: "center"
  },
  containerText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 20
  }
});
