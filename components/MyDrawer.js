import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
    // <View>Drawer</View>
  );
};

export default MyDrawer;

const styles = StyleSheet.create({});
