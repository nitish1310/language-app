import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const AboutScreen = ({ navigation }) => {
  return (
    <View>
      <Text>About Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({});
