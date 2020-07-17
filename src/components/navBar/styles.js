import React from "react";
import { StyleSheet } from "react-native";
import {
  useFonts,
  DancingScript_400Regular
} from "@expo-google-fonts/dancing-script";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F91D45"
  },
  text: {
    fontFamily: "DancingScript_400Regular",
    fontSize: 30
  }
});
