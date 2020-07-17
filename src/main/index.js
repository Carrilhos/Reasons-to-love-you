import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import styles from "./styles";
import NavBar from "../components/navBar";

import bg from "../asset/bg.png";

function Motivos(props) {
  return (
    <View style={styles.container}>
      <NavBar name="Motivos para te amar" />
      <ImageBackground source={bg} style={styles.image}>
        <View style={styles.containerText}>
          <Text style={styles.text1}>Eu te amo porque...</Text>
          <Text style={styles.text2}>
            Tu é uma pessoa muito carinhosa e atensiosa com todos a tua volta, e
            eu acho isso lindo. Eu te amo
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

function Musicas() {
  return (
    <View style={styles.container}>
      <NavBar name="Músicas que me lembram de ti" />
      <ImageBackground source={bg} style={styles.image}></ImageBackground>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Motivos para te amar") {
              iconName = focused ? "ios-heart" : "ios-heart";
            } else if (route.name === "Musicas que me lembram de ti") {
              iconName = focused ? "ios-musical-notes" : "ios-musical-notes";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: "#F91D45",
          inactiveTintColor: "gray",
          style: {}
        }}
      >
        <Tab.Screen name="Motivos para te amar" component={Motivos} />
        <Tab.Screen name="Musicas que me lembram de ti" component={Musicas} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
