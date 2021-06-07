import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";
import SettingsScreen from "../screens/SettingsScreen";
import WordScreen from "../screens/WordScreen";
import CourseScreen from "../screens/CourseScreen";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import NewWordScreen from "../screens/NewWordScreen";
import ChatScreen from "../screens/ChatScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#427dff",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Splash"
      screenOptions={screenOptionStyle}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Course" component={CourseScreen} />
      <Stack.Screen name="Word" component={WordScreen} />
      <Stack.Screen name="NewWord" component={NewWordScreen} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
};

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const ChatStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Chats" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  ContactStackNavigator,
  SettingsStackNavigator,
  ChatStackNavigator,
};

const styles = StyleSheet.create({});
