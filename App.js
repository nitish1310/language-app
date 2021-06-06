import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import SplashScreen from "./screens/SplashScreen";
import MainStackNavigator from "./navigation/StackNavigator";
import BottomTabNavigator from "./navigation/TabNavigator";
import DrawerNavigator from "./navigation/DrawerNavigator";

import { AlanView } from "./AlanSDK.js";

const globalScreenOptions = {
  headerStyle: { backgroundColor: "white" },
  headerTitleStyle: { color: "black", alignSelf: "center" },
  headerTintColor: "white",
};

console.log(React.version);

export default function App() {
  return (
    <NavigationContainer>
      {/* <AlanView
        projectid={
          "1553e56ef76697df5e29f25cd0989e032e956eca572e1d8b807a3e2338fdd0dc/stage"
        }
      /> */}
      {/* <MyDrawer /> */}
      {/* <Stack.Navigator
        // initialRouteName="SplashScreen"
        screenOptions={globalScreenOptions}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator> */}
      {/* <MainStackNavigator /> */}
      {/* <BottomTabNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
