import React from "react";
import { View, Text, ImageBackground } from "react-native";
import {
  useFonts,
  DancingScript_400Regular
} from "@expo-google-fonts/dancing-script";

import styles from "./styles";

export default function NavBar(props) {
  let [fontsLoaded] = useFonts({
    DancingScript_400Regular
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
}
